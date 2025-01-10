import "./Key.css";

const Key = ({ keyContent }) => {
    const sendKeyupEvent = () => {
        dispatchEvent(new KeyboardEvent('keyup', {
            key: keyContent.key
        }));
    }

    if (keyContent.isPressed) {
        return (
            <div onClick={sendKeyupEvent} className="key pressed">{keyContent.key}</div>
        )
    } else {
        return (
            <div onClick={sendKeyupEvent} className="key">{keyContent.key}</div>
        )
    }
}

export default Key;