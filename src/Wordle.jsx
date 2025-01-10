import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import useWordle from "./hooks/useWordle";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";

const Wordle = ({ solution }) => {
    const { turn, currentGuess, guesses, handleKeyupEvent, isCorrect, pressedKeys } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyupEvent);

        if (turn > 5 || isCorrect) {
            window.removeEventListener('keyup', handleKeyupEvent);
        }

        return () => window.removeEventListener('keyup', handleKeyupEvent);
    }, [handleKeyupEvent, turn, isCorrect]);


    return (
        <>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keyboard pressedKeys={pressedKeys} />
            <Modal isVisible={turn === 5 || isCorrect} isCorrect={isCorrect} solution={solution} />
        </>
    )
}

export default Wordle;