import { Outlet } from "react-router-dom";
import Brand from "./../components/Brand/Brand";

const GetStarted = () => {
    return (
        <section className="app__main my-5 getStarted">
            <div className='container d-flex flex-column justify-content-center align-items-center col-md-6 gap-5'>
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