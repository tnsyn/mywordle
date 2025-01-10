import { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ isVisible }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(isVisible);
        }, 2000);
    }, [isVisible]);

    const handlePlayAgain = () => {
        window.location.reload();
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    if (isOpen) {
        return (
            <div className="modalContainer">
                <div className="modal">
                    <div onClick={handleClose} className="closeButton" role="button">x</div>
                    <h2>Congratulations! You solved it!</h2>
                    <div className="playAgainButton" onClick={handlePlayAgain} role="button">Play again</div>
                </div>
            </div>
        )
    }

    return;
}

export default Modal;