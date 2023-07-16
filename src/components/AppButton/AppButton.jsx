import { Spinner } from "react-bootstrap";
import { useState, useEffect } from 'react';
import "./AppButton.css";

const AppButton = ({ action, text, className, loader, disable }) => {

    const [isAvailable, setAvailable] = useState(true);

    const handleClick = () => {
        //button will not be clickable after it has been clicked
        setAvailable(false);
        action();
        //button will be unclickable for 15s once it is clicked
        setTimeout(() => {
            setAvailable(true);
        }, 15000);
    }

    const spinner = (
        <div className="justify-content-center align-items-center w-100 h-100 position-absolute" style={{ transform: "scale(0.6)", display: loader === (undefined || null) ? "flex" : loader ? "flex" : "none" }}>
            <Spinner />
        </div>
    )

    return (
        <div className={`appButton position-relative ${className} ${disable !== (undefined || null) ? disable ? "disabled" : "" : ""}`} role="button" style={{ cursor: isAvailable ? "pointer" : "default", pointerEvents: disable !== (undefined || null) ? disable ? "none" : "" : "" }}>
            {!isAvailable && spinner}
            <button style={{ opacity: isAvailable ? 1 : loader ? 0 : 1, cursor: isAvailable ? "pointer" : loader ? "default" : "pointer" }} className="appButton__button" onClick={handleClick}>{text}</button>
        </div >
    );
}

export default AppButton;