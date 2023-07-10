import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataProvider } from '../AppData';

const DownloadSection = () => {

    const navigate = useNavigate();
    const { videoObject } = useContext(DataProvider);
    const {
        url,
        qualities,
        duration,
        title,
        thumbnail,
    } = videoObject;

    console.log("qualities");
    console.log(qualities);

    //  if there is no existing converted video or url, the user will automatically be redirected to conversion section
    if (videoObject === null) {
        navigate("/c");
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
                        <div class="btn-group">
                            <button type="button" class="btn" style={{ backgroundColor: "var(--secondary-clr)", color: "white" }}>Download</button>
                            <button type="button" class="btn dropdown-toggle dropdown-toggle-split" style={{ backgroundColor: " var(--secondary-clr)", color: "white" }} data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                {/* <li><a class="dropdown-item" href="#">Lowest Quality 440p</a></li>
                                <li><a class="dropdown-item" href="#">Low Quality 600p</a></li>
                                <li><a class="dropdown-item" href="#">Standard 780p</a></li>
                                <li><a class="dropdown-item" href="#">HD 1080p</a></li> */}
                            </ul>
                        </div>
                        <button type="button" class="btn" style={{ backgroundColor: "var(--secondary-clr)", color: "white" }}>Convert Next</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DownloadSection;