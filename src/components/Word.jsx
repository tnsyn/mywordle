import "./Word.css";

const Word = ({ guess, currentGuess }) => {
    if (guess != undefined) {
        return (
            <div className="word past">
                {guess.map((letter, idx) => (
                    <div key={idx} className={letter.color}>{letter.value}</div>
                ))}
            </div>
        )
    }
    if (currentGuess !== undefined) {
        const currentGuessArr = currentGuess.split("");
        const blankBoxes = [...Array(5 - currentGuessArr.length)];
        return (
            <div className="word current">
                {currentGuessArr.map((letter, idx) => (
                    <div key={idx} className="filled">{letter}</div>
                ))}
                {blankBoxes.map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        )
    }
    return (
        <div className="word">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Word;