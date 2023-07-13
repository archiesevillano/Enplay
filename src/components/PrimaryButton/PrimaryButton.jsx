import { Spinner } from "react-bootstrap";
import "./PrimaryButton.css";
import { useState, useContext } from 'react';
import { DataProvider } from "../../AppData";

const PrimaryButton = ({ cls, text, action, hasLoader, color }) => {

    // This button can only be clicked once unless there's an error
    //determines if the button has or hasn't clicked yet by the user
    const [clicked, isClicked] = useState(false);
    const { errorMessage } = useContext(DataProvider);

    const handleClick = () => {
        try {
            isClicked(true);
            //run this when Button is clicked
            action();
        }
        catch (error) {
            console.log(error);
            isClicked(false); //set to false, so the button can be clicked again
        }
    }

    return (
        <div className={`primButton d-inline-flex justify-content-center align-items-center position-relative ${cls}`} role="button" style={{ backgroundColor: color || "transparent", opacity: hasLoader ? clicked && !errorMessage ? "0.8" : "" : "", pointerEvents: clicked && !errorMessage ? hasLoader ? "none" : "" : "" }} onClick={clicked ? hasLoader ? null : handleClick : handleClick}>
            {hasLoader ? <div className="container-fluid position-absolute justify-content-center align-items-center" style={{ display: clicked && !errorMessage ? "flex" : "none", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <Spinner style={{ width: "20px", height: "20px", opacity: "0.7" }} />
            </div> : ""}
            <span style={{ visibility: clicked && !errorMessage ? hasLoader ? "hidden" : "visible" : "visible" }}>{text}</span>
        </div>
    );
}

export default PrimaryButton;