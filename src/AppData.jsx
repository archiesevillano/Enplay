import React from "react";
import { useState, useEffect } from 'react';
import Facebook from "./assets/converters/svg/facebook.svg";
import PornHub from "./assets/converters/svg/pornhub.svg";
import Tiktok from "./assets/converters/svg/tiktok.svg";
import YouTube from "./assets/converters/svg/youtube.svg";
import Axios from "axios";
import SnackBar from "./components/SnackBar/SnackBar";

export const DataProvider = React.createContext();

const AppData = ({ children }) => {

    const serverReq = Axios.create({ baseURL: import.meta.env.VITE_SERVER });

    const [conversionInfo, setConversionInfo] = useState(
        {
            name: "YouTube Converter",
            type: "YouTube",
            logo: YouTube,
            currentUrl: null, //current url that the user entered
            prevURL: null, //previous url that the user entered. This will changed once the user pressed the ConvertNext button
        }
    );

    const validURLFormat = {
        youtube: {
            sampleURL: "https://www.youtube.com/watch?v=-qHDsh0iTGs",
            key: "https://www.youtube.com/watch?v=",
        },
        facebook: {
            sampleURL: "a",
            key: "a",
        },
        tiktok: {
            sampleURL: "a",
            key: "a",
        },
        porhub: {
            sampleURL: "a",
            key: "a",
        },
    }

    const [errorMessage, setErrorMessage] = useState(null);

    // URL from newly converted video
    const [currentConvert, setCurrentConvert] = useState("");

    const switchConverter = converterName => {
        converters.forEach(item => {
            if (item.type === converterName || item.name === converterName) {
                setConversionInfo(
                    {
                        name: item.name,
                        type: item.type,
                        logo: item.logo,
                        currentUrl: currentConvert,
                        prevURL: conversionInfo.currentUrl,
                    }
                )
            }
        })
    }

    const pages = [
        {
            id: "getStarted",
            name: "Get Started",
            path: "/",
        },
        {
            id: "guidePage",
            name: "Guide",
            path: "/guide",
        },
        {
            id: "aboutPage",
            name: "About",
            path: "/about",
        },
        {
            id: "contactPage",
            name: "Contact",
            path: "/contact",
        },
    ];

    const converters = [
        {
            logo: Facebook,
            name: "Facebook Converter",
            type: "Facebook",
            to: "https://www.facebook.com/"
        },
        {
            logo: Tiktok,
            name: "TikTok Converter",
            type: "TikTok",
            to: "https://www.tiktok.com/"
        },
        {
            logo: PornHub,
            name: "PornHub Converter",
            type: "PornHub",
            to: "https://www.pornhub.com/",
        },
        {
            logo: YouTube,
            name: "Youtube Converter",
            type: "Youtube",
            to: "https://www.youtube.com/",
        },
    ]

    const [videoObject, setVideoObject] = useState({
        url: null,
        qualities: null,
        duration: null,
        title: null,
        extension: null,
        thumbnail: null,
    });

    useEffect(() => {
        console.log(videoObject);
    }, [videoObject]);

    return (
        <DataProvider.Provider value={{ pages, converters, conversionInfo, errorMessage, setErrorMessage, switchConverter, serverReq, currentConvert, setCurrentConvert, setVideoObject, videoObject, validURLFormat }}>
            {children}
            <SnackBar message={errorMessage} />
        </DataProvider.Provider>
    );
}

export default AppData;