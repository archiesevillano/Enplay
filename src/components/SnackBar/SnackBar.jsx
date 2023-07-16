import { useEffect, useState, useContext } from "react";
import "./SnackBar.css";
import { DataProvider } from "../../AppData";
const SnackBar = () => {

    const [isVisible, setVisibility] = useState(true);
    const { errorMessage, setErrorMessage } = useContext(DataProvider);

    useEffect(() => {
        setVisibility(true);
        // only start the timer when message prop has value
        if (errorMessage) {
            console.log("error occured");
            setTimeout(() => {
                setVisibility(false);
                setErrorMessage("");
            }, 10000);
        }
    }, [errorMessage]);

    if (errorMessage) {
        return (
            <div className="snackbar" style={{ display: isVisible ? "flex" : "none" }}>
                <p className="snackBar__message m-0">{errorMessage}</p>
                <button className="snackbar__closeBtn" onClick={() => setVisibility(false)}>
                    <img src={"https://clipground.com/images/x-image-png-6.png"} alt="Close" className="snackbar__closeBtn_x" />
                </button>
            </div>
        );
    }
}

export default SnackBar;