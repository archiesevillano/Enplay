import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataProvider } from '../AppData';

const DownloadSection = () => {

    // determines the quality of the converted video file
    const [downloadQuality, setDownloadQuality] = useState({ quality: null, downloadURL: null });
    const navigate = useNavigate();
    const { videoObject, serverReq } = useContext(DataProvider);
    const {
        url,
        qualities,
        duration,
        title,
        thumbnail,
    } = videoObject;

    console.log("qualities");
    console.log(qualities);

    // returns the list of available or downloadable video quality of the converted video
    const getQualityList = () => {
        const selection = [];

        try {
            for (const key in qualities) {
                switch (key) {
                    case "q1080p":
                        if (qualities[key] !== null || undefined) {
                            selection.push({ order: 1, label: "1080p High Quality", quality: qualities[key]?.format_note, downloadURL: qualities[key]?.url });
                        }
                        break;
                    case "q720p":
                        if (qualities[key] !== null || undefined) {
                            selection.push({ order: 2, label: "720p Standard", quality: qualities[key]?.format_note, downloadURL: qualities[key]?.url });
                        }
                        break;
                    case "q360p":
                        if (qualities[key] !== null || undefined) {
                            selection.push({ order: 3, label: "360p Low Quality", quality: qualities[key]?.format_note, downloadURL: qualities[key]?.url });
                        }
                        break;
                    case "q240p":
                        if (qualities[key] !== null || undefined) {
                            selection.push({ order: 4, label: "240p", quality: qualities[key]?.format_note, downloadURL: qualities[key]?.url });
                        }
                        break;
                    case "q144p":
                        if (qualities[key] !== null || undefined) {
                            selection.push({ order: 5, label: "144p", quality: qualities[key]?.format_note, downloadURL: qualities[key]?.url });
                        }
                        break;
                    default:
                        console.log("Error Occured");
                }
            }
        } catch (error) {
            console.log(error);
        }

        selection.sort((a, b) => a.order - b.order);

        return selection;
    }

    const handleSwitchQuality = (q, dl) => {
        setDownloadQuality({ quality: q, downloadURL: dl });
    }

    const formatValues = (value, unit) => {
        switch (unit) {
            case "seconds":
                return value.toString().concat(value > 1 ? "secs" : "sec");
            case "minutes":
                return value.toString().concat(value > 1 ? "mins" : "min");
            case "hours":
                return value.toString().concat(value > 1 ? "hrs" : "hr");
            default:
                console.log("Time Unit Error");
        }
    }

    const getDuration = () => {

        let hours;
        let minutes;
        let seconds;

        // checks if the duration is more or equal to an hour
        if (parseInt(duration) >= 3600) {
            hours = Math.ceil(parseInt(duration) / 3600);
            minutes = Math.ceil((parseInt(duration) - hours) / 60);
            seconds = minutes % 60;

            return (`${formatValues(hours, "hours")} ${formatValues(minutes, "minutes")}${formatValues(seconds, "seconds")}`);
        }
        else if (parseInt(parseInt(duration)) >= 60) {
            minutes = Math.ceil(parseInt(duration) / 60);
            seconds = minutes % 60;

            return (`${formatValues(minutes, "minutes")} ${formatValues(seconds, "seconds")}`);
        }
        else {
            seconds = minutes % 60;

            return (`${formatValues(seconds, "seconds")}`);
        }
    }

    const handleDownload = async () => {

        const videoURL = downloadQuality.downloadURL === null ? getQualityList()[0].downloadURL : downloadQuality.downloadURL;

        console.log("Video URL:");
        console.log(videoURL);

        try {
            const response = await serverReq.post("/download", { accessKey: import.meta.env.VITE_ACCESS_KEY, url: videoURL });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    //  if there is no existing converted video or url, the user will automatically be redirected to conversion section
    if (videoObject === null) {
        navigate("/c");
    }


    return (
        <div className="downloadBoxContainer container-fluid d-flex justify-content-center align-items-center m-0 p-0">
            <div className="downloadBoxContainer__box container d-flex flex-row p-3" style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
                <div className="downloadBoxContainer__box__thumbnailContainer col-md-4 col-5 d-flex justify-content-center align-items-center">
                    <img style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }} src={thumbnail} />
                </div>
                <div className="downloadBoxContainer__box__info col d-flex flex-column justify-content-between px-3">
                    <p className="downloadBoxContainer__box__info__title fs-6 fw-bold m-0" style={{ fontFamily: "var(--heads)", color: "var(--secondary-clr)" }}>{title}</p>
                    <div className="downloadBoxContainer__box__info__duration">
                        <p className="downloadBoxContainer__box__info__duration__text m-0 fs-6" style={{ color: "var(--secondary-clr)" }}>Duration:</p>
                        <p className="downloadBoxContainer__box__info__duration__text" style={{ color: "var(--secondary-clr)" }}>{getDuration()}</p>
                    </div>
                    <div className="container-fluid p-0 d-flex flex-row justify-content-start align-items-center gap-2">
                        <div className="btn-group">
                            <button type="button" className="btn" style={{ backgroundColor: "var(--secondary-clr)", color: "white" }} onClick={handleDownload}>{`Download ${downloadQuality.quality === null ? getQualityList()[0].quality : downloadQuality.quality}`}</button>
                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" style={{ backgroundColor: " var(--secondary-clr)", color: "white" }} data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                {getQualityList().map(item => <li key={item?.quality}><a className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => handleSwitchQuality(item?.quality, item?.downloadURL)}>{item?.label}</a></li>)}
                            </ul>
                        </div>
                        <button type="button" className="btn" style={{ backgroundColor: "var(--secondary-clr)", color: "white" }}>Convert Next</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DownloadSection;