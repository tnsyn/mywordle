import Key from "./Key";
import "./Keyboard.css";

const Keyboard = ({ pressedKeys }) => {
    return (
        <div className="keyboard">
            <div className="row">
                {pressedKeys.slice(0, 10).map((key, id) => (
                    <Key key={id} keyContent={key} />
                ))}
            </div>
            <div className="row">
                {pressedKeys.slice(10, 20).map((key, id) => (
                    <Key key={id} keyContent={key} />
                ))}
            </div>
            <div className="row">
                <Key keyContent={{ key: "Enter", isPressed: false }} />
                {pressedKeys.slice(20, 28).map((key, id) => (
                    <Key key={id} keyContent={key} />
                ))}
                <Key keyContent={{ key: "Backspace", isPressed: false }} />
            </div>
        </div>
    )
}

export default Keyboard;