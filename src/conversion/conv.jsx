import { useNavigate } from 'react-router-dom';
import URLInput from "../components/URLInput/URLInput";
import PrimaryButton from "../components/PrimaryButton.jsx/PrimaryButton";
import { useContext } from 'react';
import { DataProvider } from '../AppData';

const Conversion = () => {

    const navigate = useNavigate();
    const { serverReq, setCurrentConvert, currentConvert } = useContext(DataProvider);

    const handleConvert = async () => {
        try {
            const response = await serverReq.get("/", { accessKey: import.meta.env.VITE_SERVER, url: currentConvert });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container my-4">
            <URLInput onType={e => setCurrentConvert(e.target.value)} />
            <p className="col col-md-7" style={{ fontFamily: "var(--inter)", fontSize: "0.7rem", transform: "translate(0, -13px)" }}>Search and Copy the URL of the video you wish to download and Paste it in here</p>
            <div className="container-fluid  d-flex justify-content-evenly align-items-center">
                <div className="col col-lg-7 d-flex justify-content-evenly align-items-center">
                    <PrimaryButton text="Convert" action={() => handleConvert} hasLoader={true} color={"var(--primary-clr)"} />
                    <PrimaryButton text="Go back" action={() => alert("Working")} hasLoader={false} color={"var(--primary-clr)"} />
                </div>
            </div>
        </div>
    );
}

export default Conversion;