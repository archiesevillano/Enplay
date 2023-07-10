import { useNavigate } from 'react-router-dom';
import URLInput from "../components/URLInput/URLInput";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import { useContext, useState } from 'react';
import { DataProvider } from '../AppData';

const Conversion = () => {

    const navigate = useNavigate();
    const { serverReq, setCurrentConvert, currentConvert, setVideoObject } = useContext(DataProvider);
    const [hasConversionError, setConversionError] = useState(false);

    const handleConvert = async () => {
        try {
            console.log(currentConvert);
            console.log(import.meta.env.VITE_ACCESS_KEY);
            const response = await serverReq.post("/converter", { accessKey: import.meta.env.VITE_ACCESS_KEY, url: currentConvert });
            console.log(response);

            // fetch mp4 formats only in formats array
            const mp4Formats = response?.data?.formats.filter(item => item?.video_ext === "mp4");

            const q1080p = mp4Formats?.filter(item => item?.format_note
                === "1080p");
            const q720p = mp4Formats?.filter(item => item?.format_note
                === "720p");
            const q360p = mp4Formats?.filter(item => item?.format_note
                === "360p");
            const q240p = mp4Formats?.filter(item => item?.format_note
                === "240p");
            const q144p = mp4Formats?.filter(item => item?.format_note
                === "144p");

            // sort format in descending order based on their filesize
            q1080p.sort((a, b) => b.filesize - a.filesize);
            q720p.sort((a, b) => b.filesize - a.filesize);
            q360p.sort((a, b) => b.filesize - a.filesize);
            q240p.sort((a, b) => b.filesize - a.filesize);
            q144p.sort((a, b) => b.filesize - a.filesize);

            const qualities = {
                q1080p: q1080p[0] || null,
                q720p: q720p[0] || null,
                q360p: q360p[0] || null,
                q240p: q240p[0] || null,
                q144p: q144p[0] || null,
            };

            const videoThumbnail = response?.data?.thumbnail;
            const videoDuration = response?.data?.duration;
            const videoTitle = response?.data?.fulltitle;
            const videoURL = response?.data?.webpage_url;
            const videoId = response?.data?.id;
            setVideoObject(
                {
                    id: videoId,
                    url: videoURL,
                    qualities: qualities,
                    duration: videoDuration,
                    title: videoTitle,
                    thumbnail: videoThumbnail,
                }
            );

            // check if videoURL and id is not empty
            if ((videoURL !== null || undefined) && videoId !== null || undefined) {
                // setting current converted URL
                setCurrentConvert(videoURL);
                navigate("/d");
            }

        } catch (error) {
            console.log(error);
            console.log(error.code);
            if (error.code === "ERR_NETWORK") {
                setConversionError(true);
            }
        }
    }

    return (
        <div className="container my-4">
            <URLInput onType={e => setCurrentConvert(e.target.value)} />
            <p className="col col-md-7" style={{ fontFamily: "var(--inter)", fontSize: "0.7rem", transform: "translate(0, -13px)" }}>Search and Copy the URL of the video you wish to download and Paste it in here</p>
            <div className="container-fluid  d-flex justify-content-evenly align-items-center">
                <div className="col col-lg-7 d-flex justify-content-evenly align-items-center">
                    {!hasConversionError ? <><PrimaryButton text="Convert" action={handleConvert} hasLoader={true} color={"var(--primary-clr)"} />
                        <PrimaryButton text="Go back" action={() => alert("Working")} hasLoader={false} color={"var(--primary-clr)"} /></>
                        :
                        <><PrimaryButton text="Retry" action={handleConvert} hasLoader={true} color={"var(--primary-clr)"} />
                            <PrimaryButton text="Go back" action={() => alert("Working")} hasLoader={false} color={"var(--primary-clr)"} /></>}
                </div>
            </div>
        </div>
    );
}

export default Conversion;