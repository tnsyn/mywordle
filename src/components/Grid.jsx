import Word from "./Word";

const Grid = ({ currentGuess, guesses, turn }) => {
    return (
        <div>
            {guesses.map((guess, idx) => {
                if (turn === idx) {
                    return <Word key={idx} currentGuess={currentGuess} />
                }
                return <Word key={idx} guess={guess} />
            })}
        </div>
    )
}

export default Grid;