import { Outlet, useNavigate } from "react-router-dom";
import Brand from "./../components/Brand/Brand";
import { useContext, useEffect } from "react";
import { DataProvider } from "../AppData";

const GetStarted = () => {

    const { conversionInfo } = useContext(DataProvider);

    // automatically redirects the user to convert child route section
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/c");
    }, []);

    return (
        <section className="app__main mt-5 mb-3 getStarted">
            <div className='container d-flex flex-column justify-content-center align-items-center col-md-6 gap-4'>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <Brand />
                    <p className="w-75 text-center">
                        Download your favorite videos and musics for free online with just few clicks.
                    </p>
                </div>
                <Outlet />
                <p className="col-12 text-center">
                    Effortlessly download your favorite videos and music from popular websites like YouTube, Facebook, and TikTok with our free and high-speed online video and audio downloader. Experience the convenience of accessing your most visited sites and grab your desired content in just a few clicks.
                </p>
            </div>
        </section>
    );
}

export default GetStarted;