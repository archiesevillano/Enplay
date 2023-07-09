
import URLInput from "../components/URLInput/URLInput";
import PrimaryButton from "../components/PrimaryButton.jsx/PrimaryButton";

const Conversion = () => {
    return (
        <div className="container">
            <URLInput />
            <p className="col col-md-7" style={{ fontFamily: "var(--inter)", fontSize: "0.7rem", transform: "translate(0, -13px)" }}>Search and Copy the URL of the video you wish to download and Paste it in here</p>
            <div className="container-fluid  d-flex justify-content-evenly align-items-center">
                <div className="col col-lg-7 d-flex justify-content-evenly align-items-center">
                    <PrimaryButton text="Convert" action={() => alert("Working")} hasLoader={true} />
                    <PrimaryButton text="Go back" action={() => alert("Working")} hasLoader={false} />
                </div>
            </div>
        </div>
    );
}

export default Conversion;