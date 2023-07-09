import { Spinner } from "react-bootstrap";
import "./PrimaryButton.css";
import { useState } from 'react';

const PrimaryButton = ({ text, action, hasLoader }) => {

    // This button can only be clicked once unless there's an error
    //determines if the button has or hasn't clicked yet by the user
    const [clicked, isClicked] = useState(false);

    const handleClick = () => {
        try {
            isClicked(true);
            action(); //run this when Button is clicked
        }
        catch (error) {
            console.log(error);
            isClicked(false); //set to false, so the button can be clicked again
        }
    }

    return (
        <div className="primButton d-inline-flex justify-content-center align-items-center position-relative" role="button" style={{ opacity: hasLoader ? clicked ? "0.8" : "" : "", pointerEvents: clicked ? hasLoader ? "none" : "" : "" }} onClick={clicked ? hasLoader ? "" : handleClick : handleClick}>
            {hasLoader ? <div className="container-fluid position-absolute justify-content-center align-items-center" style={{ display: clicked ? "flex" : "none", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <Spinner style={{ width: "20px", height: "20px", opacity: "0.7" }} />
            </div> : ""}
            <span style={{ visibility: clicked ? hasLoader ? "hidden" : "visible" : "visible" }}>{text}</span>
        </div>
    );
}

export default PrimaryButton;