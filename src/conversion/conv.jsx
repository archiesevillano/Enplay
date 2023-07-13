import { useNavigate } from 'react-router-dom';
import URLInput from "../components/URLInput/URLInput";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import { useContext, useState } from 'react';
import { DataProvider } from '../AppData';

const Conversion = () => {

    const navigate = useNavigate();
    const { serverReq, setCurrentConvert, currentConvert, setVideoObject, conversionInfo, setErrorMessage, validURLFormat, switchConverter } = useContext(DataProvider);
    const [hasConversionError, setConversionError] = useState(false);

    const handleYoutubeConvert = async () => {
        const FILE_EXTENSION = "mp4";

        console.log(currentConvert);
        console.log(import.meta.env.VITE_ACCESS_KEY);
        console.log(`/${conversionInfo.type.toString().toLowerCase()}`);
        const response = await serverReq.post(`/converter/${conversionInfo.type.toString().toLowerCase()}`, { accessKey: import.meta.env.VITE_ACCESS_KEY, url: currentConvert });
        console.log(response);

        // fetch mp4 formats only in formats array
        const mp4Formats = response?.data?.formats.filter(item => item?.video_ext === FILE_EXTENSION);

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
        const videoExtension = FILE_EXTENSION;

        setVideoObject(
            {
                id: videoId,
                url: videoURL,
                qualities: qualities,
                duration: videoDuration,
                title: videoTitle,
                extension: videoExtension,
                thumbnail: videoThumbnail,
            }
        );

        // check if videoURL and id is not empty
        if ((videoURL !== null || undefined) && videoId !== null || undefined) {
            // setting current converted URL
            setCurrentConvert(videoURL);
            navigate("/d");
        }
    }

    const handleFacebookConvert = async () => {
        const response = await serverReq.post(`/converter/${conversionInfo.type.toString().toLowerCase()}`, { accessKey: import.meta.env.VITE_ACCESS_KEY, url: currentConvert });
        console.log("response");
        console.log(response);

        const video = response?.data?.formats?.filter(item => {
            return item?.format_id === "hd";
        });
        console.log("video");
        console.log(video);

        const audio = response?.data?.formats?.filter(item => {
            return item?.audio_ext === "mp3";
        });
        console.log("audio");
        console.log(audio);
    }

    const handleConvert = async () => {
        // verify the url first before start the conversion
        if (handleVerifyURL()) {
            try {
                switch (conversionInfo.type.toString().toLowerCase()) {
                    case "youtube":

                        break;
                    case "facebook":
                        handleFacebookConvert();
                        break;
                }

            } catch (error) {
                console.log(error);
                console.log(error.code);
                if (error.code === "ERR_NETWORK") {
                    setConversionError(true);
                }
            }
        }
    }

    const handleVerifyURL = () => {
        // check if the url is empty
        if (currentConvert) {
            alert("true");
        }
        setErrorMessage("Please enter URL");
        return false;
    }

    //reads the current url and selects/matches the proper converter for the given url
    const defineConverter = inputValue => {
        setCurrentConvert(inputValue);

        for (const key in validURLFormat) {
            console.log(validURLFormat[key]?.key);
            if (inputValue.startsWith(validURLFormat[key]?.key)) {
                console.log("It went through");
                switchConverter(key.toString().charAt(0).toUpperCase() + key.toString().slice(1));
            }
        }
    }

    return (
        <div className="container-fluid container-xl my-4">
            <URLInput onType={e => defineConverter(e.target.value)} />
            <p className="col col-md-10" style={{ fontFamily: "var(--inter)", fontSize: "0.7rem", transform: "translate(0, -13px)" }}>Search and Copy the URL of the video you wish to download and Paste it in here</p>
            <div className="container-fluid  d-flex justify-content-evenly align-items-center">
                <div className="col col-lg-7 d-flex justify-content-evenly align-items-center">
                    {!hasConversionError ? <><PrimaryButton cls="col-5 col-sm-4 col-lg-4 col-md-5 col-lg-5 col-xl-4" text="Convert" action={handleConvert} hasLoader={true} color={"var(--primary-clr)"} />
                        <PrimaryButton cls="col-5 col-sm-4 col-lg-4 col-md-5 col-lg-5 col-xl-4" text="Go back" action={() => alert("Working")} hasLoader={false} color={"var(--primary-clr)"} /></>
                        :
                        <><PrimaryButton cls="col-5 col-sm-4 col-lg-4 col-md-5 col-lg-5 col-xl-4" text="Retry" action={handleConvert} hasLoader={true} color={"var(--primary-clr)"} />
                            <PrimaryButton cls="col-5 col-sm-4 col-lg-4 col-md-5 col-lg-5 col-xl-4" text="Go back" action={() => alert("Working")} hasLoader={false} color={"var(--primary-clr)"} /></>}
                </div>
            </div>
        </div>
    );
}

export default Conversion;