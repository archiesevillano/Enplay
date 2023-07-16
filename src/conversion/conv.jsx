import { useNavigate } from 'react-router-dom';
import URLInput from "../components/URLInput/URLInput";
import { useContext, useState } from 'react';
import { DataProvider } from '../AppData';
import ContentUnavailable from './../../src/assets/not-available-content-img.jpg';
import AppButton from '../components/AppButton/AppButton';

const Conversion = () => {

    const navigate = useNavigate();
    const { serverReq, setCurrentConvert, converted, setConverted, currentConvert, setVideoObject, conversionInfo, setErrorMessage, validURLFormat, switchConverter } = useContext(DataProvider);

    const handleYoutubeConvert = async () => {
        try {
            const FILE_EXTENSION = "mp4";
            const response = await serverReq.post(`/converter/${conversionInfo.type.toString().toLowerCase()}`, { accessKey: import.meta.env.VITE_ACCESS_KEY, url: currentConvert });

            if (response.request === 0) {
                throw "Network Error";
            }
            else {
                // fetch mp4 formats only in formats array
                const mp4Formats = response?.data?.formats.filter(item => item?.video_ext === FILE_EXTENSION && item?.acodec === 'mp4a.40.2');
                mp4Formats.sort((a, b) => b.quality - a.quality);

                const downloadURL = mp4Formats[0].url;
                const videoThumbnail = response?.data?.thumbnail;
                const videoTitle = response?.data?.fulltitle;

                setConvertDetails(videoTitle, videoThumbnail, downloadURL);
            }
        }
        catch (error) {
            setErrorMessage(error.message);
        }

    }

    const handleTiktokConvert = async () => {
        try {
            const response = await serverReq.post(`/converter/${conversionInfo.type.toString().toLowerCase()}`, { accessKey: import.meta.env.VITE_ACCESS_KEY, url: currentConvert });
            console.log("response");
            console.log(response);

            const downloadURL = response?.data?.result?.video[0] || response?.data?.result?.video[1] || response?.data?.result?.video[2];
            const videoThumbnail = response?.data?.result?.cover[0] || response?.data?.result?.cover[1];
            const videoTitle = response?.data?.result?.description;

            console.log(downloadURL);
            setConvertDetails(videoTitle, videoThumbnail, downloadURL);
            // if there's an error prior to this successful process, then it will be overwrite by the successful process
            setConversionError(false);
        } catch (error) {
            console.log(error);
            setConversionError(true);
        }
    }

    const setConvertDetails = (title, thumbnail, downloadURL) => {
        setVideoObject(
            {
                url: currentConvert,
                title,
                thumbnail,
                downloadURL,
            }
        );

        // check if videoURL and id is not empty
        if ((currentConvert !== null || undefined) && downloadURL !== null || undefined) {
            setConverted(true);
            // setting current converted URL
            navigate("/d");
        }
    }

    const handleGoBack = () => {
        setConverted(true);
        navigate("/d");
    }

    const handleConvert = async () => {
        // verify the url first before start the conversion
        if (handleVerifyURL()) {
            try {
                switch (conversionInfo.type.toString().toLowerCase()) {
                    case "youtube":
                        handleYoutubeConvert();
                        // remove the current url that has just been converted
                        break;
                    case "facebook":
                        handleFacebookConvert();
                        // remove the current url that has just been converted
                        setCurrentConvert(null);
                        break;
                    case "pornhub":
                        handlePornhubConvert();
                        // remove the current url that has just been converted
                        setCurrentConvert(null);
                        break;
                    case "tiktok":
                        handleTiktokConvert();
                        // remove the current url that has just been converted
                        setCurrentConvert(null);
                        break;
                    default:
                        setErrorMessage("Unsupported Link");
                }
            } catch (error) {
                if (error.code === "ERR_NETWORK") {
                    setErrorMessage("Network Error. Please Try again later")
                }
            }
        }
    }

    const handleVerifyURL = () => {
        // check if the url is empty
        if (currentConvert) {
            // check if the provided URL is supported
            const isSupportedURL = (currentConvert.startsWith(validURLFormat.youtube.key) ||
                currentConvert.startsWith(validURLFormat.facebook.key) ||
                currentConvert.startsWith(validURLFormat.pornhub.key) ||
                currentConvert.startsWith(validURLFormat.tiktok.key)) ? true : false;

            if (isSupportedURL) {
                return true;
            }
            else {
                setErrorMessage("Unsupported URL");
                return false;
            }
        }
        else {
            setErrorMessage("Please enter URL");
            return false;
        }
    }

    //reads the current url and selects/matches the proper converter for the given url
    const defineConverter = inputValue => {
        setCurrentConvert(inputValue);

        for (const key in validURLFormat) {
            if (inputValue.startsWith(validURLFormat[key]?.key)) {
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
                    <AppButton className="col-5 col-sm-4 col-lg-4 col-md-5 col-lg-5 col-xl-4" text={"Convert"} action={handleConvert} loader={true} />
                    <AppButton className="col-5 col-sm-4 col-lg-4 col-md-5 col-lg-5 col-xl-4" text={"Go Back"} action={handleGoBack} loader={false} disable={conversionInfo.prevURL === null} />
                </div>
            </div>
        </div>
    );
}

export default Conversion;


// FACEBOOK AND YOUTUBE CONVERTER TEMPORARILY REMOVED

// const handleFacebookConvert = async () => {
    //     const response = await serverReq.post(`/converter/${conversionInfo.type.toString().toLowerCase()}`, { accessKey: import.meta.env.VITE_ACCESS_KEY, url: currentConvert });
    //     console.log("response");
    //     console.log(currentConvert);
    //     console.log(response);
    //     console.log(response.data);

    //     if (response.data === "Either the video is deleted or it's not shared publicly!") {
    //         setConvertDetails("This link is broken or have already expired. Try a new one", ContentUnavailable, undefined);
    //     }
    //     else {
    //         alert("Facebook Working");
    //         // const video = response?.data?.formats?.filter(item => {
    //         //     return item?.format_id === "hd";
    //         // });
    //         // console.log("video");
    //         // console.log(video);

    //         // const audio = response?.data?.formats?.filter(item => {
    //         //     return item?.audio_ext === "mp3";
    //         // });
    //         // console.log("audio");
    //         // console.log(audio);
    //     }

    // }

    // const handlePornhubConvert = async () => {
    //     const response = await serverReq.post(`/converter/${conversionInfo.type.toString().toLowerCase()}`, { accessKey: import.meta.env.VITE_ACCESS_KEY, url: currentConvert });
    //     console.log("response");
    //     console.log(response);

    //     const downloadURL = mp4Formats[0].url;
    //     const videoThumbnail = response?.data?.thumbnail;
    //     const videoTitle = response?.data?.fulltitle;

    //     setConvertDetails(videoTitle, videoThumbnail, downloadURL);
    // }
