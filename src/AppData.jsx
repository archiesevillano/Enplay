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
    const [converted, setConverted] = useState(false);

    const [conversionInfo, setConversionInfo] = useState(
        {
            name: "YouTube Converter",
            type: "YouTube",
            logo: YouTube,
            currentUrl: null, //current url that the user entered
            prevURL: null, //previous url that the user entered. This will changed once the user pressed the ConvertNext button
            converted: false,
        }
    );

    const validURLFormat = {
        youtube: {
            sampleURL: "https://www.youtube.com/watch?v=-qHDsh0iTGs",
            key: "https://www.youtube.com/watch?v=",
        },
        facebook: {
            sampleURL: "https://www.facebook.com/watch?v=1210101486325925",
            key: "https://www.facebook.com/watch?v=",
        },
        pornhub: {
            sampleURL: "https://www.pornhub.com/view_video.php?viewkey=ph637c02a7e487b",
            key: "https://www.pornhub.com/view_video.php?viewkey=",
        },
        tiktok: {
            sampleURL: "https://vt.tiktok.com/ZSLfngE2E/",
            key: "https://vt.tiktok.com/",
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
                        converted: true,
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
            type: "Tiktok",
            to: "https://www.tiktok.com/"
        },
        {
            logo: PornHub,
            name: "PornHub Converter",
            type: "Pornhub",
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
        title: null,
        thumbnail: null,
        downloadURL: null,
    });

    return (
        <DataProvider.Provider value={{ pages, converters, conversionInfo, converted, setConverted, errorMessage, setErrorMessage, switchConverter, serverReq, currentConvert, setCurrentConvert, setVideoObject, videoObject, validURLFormat }}>
            {children}
            <SnackBar message={errorMessage} />
        </DataProvider.Provider>
    );
}

export default AppData;