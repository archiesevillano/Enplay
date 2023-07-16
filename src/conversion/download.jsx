import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataProvider } from '../AppData';
import Axios from 'axios';

const DownloadSection = () => {
    const navigate = useNavigate();
    const { videoObject, serverReq, setConverted, conversionInfo, setConversionInfo, currentConvert, setCurrentConvert } = useContext(DataProvider);
    const {
        downloadURL,
        title,
        thumbnail,
    } = videoObject;

    // switches the panel back to conversion section
    const handleConvertNext = () => {
        navigate("/c");
        setConverted(false);
        setConversionInfo({ ...conversionInfo, prevURL: currentConvert === null ? conversionInfo.prevURL : currentConvert });
        setCurrentConvert(null);
    }

    //  if there is no existing converted video or url, the user will automatically be redirected to conversion section
    if (videoObject === null) {
        navigate("/c");

    }

    return (
        <div className="container videoObj py-4 px-3" style={{ maxWidth: "350px", backgroundColor: "#f2f2f2" }}>
            <div className="videoObj__thumbnail d-flex justify-content-center align-items-end">
                <img style={{ width: "300px", objectFit: "contain", maxHeight: "200px" }} src={thumbnail} alt="Thumbnail not available" className="videoObj__thumbnail__img" />
            </div>
            <p className="videoObj__title my-3 text-center">{title}</p>
            <div className="d-flex flex-column align-items-center gap-1 videoObj__btnGroup col">
                {
                    downloadURL === undefined
                        ? <p className="text-center w-100 fw-bold">Content not available</p>
                        : <button className="videoObj__downloadBtn btn btn-secondary w-100" role="button"><a className="text-decoration-none" style={{ color: "white" }} rel="noreferrer" href={downloadURL} target="_blank" download>Check Download</a></button>
                }
                <button className="videoObj__convertNextBtn btn btn-secondary w-100" role="button" onClick={handleConvertNext}>Convert Next</button>
            </div>
        </div>
    );
}

export default DownloadSection;






// return (
    //     <div className="downloadBoxContainer container-fluid d-flex justify-content-center align-items-center m-0 p-0">
    //         <div className="downloadBoxContainer__box container d-flex flex-sm-row flex-column p-3" style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
    //             <div className="downloadBoxContainer__box__thumbnailContainer col-md-4 col d-flex justify-content-center align-items-center">
    //                 <img style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }} src={thumbnail} />
    //             </div>
    //             <div className="downloadBoxContainer__box__info col d-flex flex-column justify-content-between px-3 mt-3">
    //                 <p className="downloadBoxContainer__box__info__title fs-6 fw-bold m-0" style={{ fontFamily: "var(--inter)", color: "var(--secondary-clr)" }}>{title}</p>
    //                 <div className="downloadBoxContainer__box__info__duration mt-3">
    //                     <p className="downloadBoxContainer__box__info__duration__text fw-bold m-0" style={{ color: "var(--secondary-clr)", fontSize: "0.8rem", letterSpacing: "0.5px" }}>Duration:</p>
    //                     <p className="downloadBoxContainer__box__info__duration__text" style={{ color: "var(--secondary-clr)" }}>{getDuration()}</p>
    //                 </div>
    //                 <div className="container-fluid p-0 d-flex flex-sm-row flex-column justify-content-start align-items-sm-center align-items-sm-start gap-2">
    //                     <div className="btn-group">
    //                         <button type="button" className="btn text-md-center text-end" style={{ backgroundColor: "var(--secondary-clr)", color: "white" }} onClick={handleDownload}>{`Download ${downloadQuality.quality === null ? getQualityList()[0].quality : downloadQuality.quality}`}</button>
    //                         <button type="button" className="btn dropdown-toggle dropdown-toggle-split" style={{ backgroundColor: " var(--secondary-clr)", color: "white" }} data-bs-toggle="dropdown" aria-expanded="false">
    //                             <span className="visually-hidden">Toggle Dropdown</span>
    //                         </button>
    //                         <ul className="dropdown-menu">
    //                             {getQualityList().map(item => <li key={item?.quality}><a className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => handleSwitchQuality(item?.quality, item?.downloadURL)}>{item?.label}</a></li>)}
    //                         </ul>
    //                     </div>
    //                     <button type="button" className="btn" style={{ backgroundColor: "var(--secondary-clr)", color: "white" }} onClick={handleConvertNext}>Convert Next</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div >
    // )