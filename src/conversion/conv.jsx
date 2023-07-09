
import URLInput from "../components/URLInput/URLInput";
import PrimaryButton from "../components/PrimaryButton.jsx/PrimaryButton";

const Conversion = () => {
    return (
        <div className="container">
            <PrimaryButton text="Convert" action={() => alert("Working")} />
            <URLInput />
            <p className="col col-md-7" style={{ fontFamily: "var(--inter)", fontSize: "0.7rem", transform: "translate(0, -13px)" }}>Search and Copy the URL of the video you wish to download and Paste it in here</p>
        </div>
    );
}

export default Conversion;