import { useEffect, useState } from "react";
import "./SnackBar.css";
const SnackBar = ({ message }) => {

    const [isVisible, setVisibility] = useState(true);

    useEffect(() => {
        // only start the timer when message prop has value
        if (message) {
            setTimeout(() => {
                setVisibility(false);
                console.log("Timeout");
            }, 10000);
        }
    }, [message]);

    if (message) {
        return (
            <div className="snackbar" style={{ display: isVisible ? "flex" : "none" }}>
                <p className="snackBar__message m-0">{message}</p>
                <button className="snackbar__closeBtn" onClick={() => setVisibility(false)}>
                    <img src={"https://clipground.com/images/x-image-png-6.png"} alt="Close" className="snackbar__closeBtn_x" />
                </button>
            </div>
        );
    }
}

export default SnackBar;