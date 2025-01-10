import { useState } from 'react';
import { transformedKeys } from '../utils/keys';

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(5)]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [pressedKeys, setPressedKeys] = useState(transformedKeys);

    const handleKeyupEvent = ({ key }) => {
        if (key == 'Enter') {
            handleEnterKey();
        }

        if (key == 'Backspace') {
            handleBackspaceKey();
        }

        if (/^[A-Za-z]$/.test(key)) {
            handleLetterKey(key);
        }
    }

    const handleEnterKey = () => {
        // Should not be able to submit if there are less than 5 letters
        if (currentGuess.length < 5) {
            return;
        }

        // Should not be able to submit if the game is over
        if (turn > 5) {
            return;
        }

        // Should not be able to submit if the guess has already been made
        if (guesses.includes(currentGuess)) {
            return;
        }

        // Submit the guess
        const formattedGuess = formatCurrentGuess();
        addCurrentGuess(formattedGuess);
    }

    const handleBackspaceKey = () => {
        // Should not be able to delete a character if the current guess is empty
        if (currentGuess.length === 0) {
            // setIsValidKeypress(false);
            return;
        }

        // Delete last letter from the current guess
        setCurrentGuess(prevGuess => prevGuess.slice(0, -1));
    }

    const handleLetterKey = (key) => {
        // Should not be able to add more letters if the current guess is already 5 letters long
        if (currentGuess.length < 5) {
            setCurrentGuess(prevGuess => prevGuess + key);
        }
    }

    const formatCurrentGuess = () => {
        const solutionArr = [...solution];
        const formattedGuess = [...currentGuess].map((letter) => { return { value: letter, color: 'grey' }; });

        // Check for correct letters in the correct position
        for (let i = 0; i < 5; i++) {
            if (solutionArr[i] === formattedGuess[i].value) {
                formattedGuess[i].color = 'green';
                continue
            }
            if (solutionArr.includes(formattedGuess[i].value)) {
                formattedGuess[i].color = 'yellow';
            }
        }

        return formattedGuess;
    }

    const addCurrentGuess = (formattedGuess) => {
        checkIsCorrect(formattedGuess);
        setGuesses(prevGuesses => {
            const newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });

        // Set all used keys' isPressed to true
        setPressedKeys(pressedKeys => {
            const usedKeys = [...currentGuess];
            const copyOfPressedKeys = pressedKeys;

            for (let i = 0; i < copyOfPressedKeys.length; i++) {
                if (usedKeys.includes(copyOfPressedKeys[i].key)) {
                    copyOfPressedKeys[i].isPressed = true;
                }
            }
            return copyOfPressedKeys;
        })
        setCurrentGuess('');
        setTurn(prevTurn => prevTurn + 1);
    }

    const checkIsCorrect = (formattedGuess) => {
        const isAllGreen = formattedGuess.filter(letter => letter.color === 'green').length === 5;
        setIsCorrect(isAllGreen);
    }

    return { turn, currentGuess, guesses, isCorrect, pressedKeys, handleKeyupEvent, isCorrect };
}

export default useWordle;