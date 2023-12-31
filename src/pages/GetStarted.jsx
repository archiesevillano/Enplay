import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Brand from "./../components/Brand/Brand";
import { useContext, useEffect } from "react";
import { DataProvider } from "../AppData";

const GetStarted = () => {

    const { conversionInfo, converted, setConverted } = useContext(DataProvider);
    const { pathname } = useLocation();

    // automatically redirects the user to convert child route section
    const navigate = useNavigate();
    useEffect(() => {
        if (!converted) {
            navigate("/c");
        }
    }, [pathname]);

    return (
        <section className="app__main mt-5 mb-3 getStarted container container-md-fluid">
            <div className='container d-flex flex-column justify-content-center align-items-center col-md-10 gap-4'>
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