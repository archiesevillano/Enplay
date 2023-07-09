import React from "react";
import { useState, useEffect } from 'react';
import Facebook from "./assets/converters/svg/facebook.svg";
import PornHub from "./assets/converters/svg/pornhub.svg";
import Tiktok from "./assets/converters/svg/tiktok.svg";
import YouTube from "./assets/converters/svg/youtube.svg";
import Axios from "axios";

export const DataProvider = React.createContext();

const AppData = ({ children }) => {

    const serverReq = Axios.create({ baseURL: import.meta.env.VITE_SERVER })

    const [conversionInfo, setConversionInfo] = useState(
        {
            name: "YouTube Converter",
            type: "YouTube",
            logo: YouTube,
            currentUrl: null, //current url that the user entered
            prevURL: null, //previous url that the user entered. This will changed once the user pressed the ConvertNext button
        }
    );

    // URL from newly converted video
    const [currentConvert, setCurrentConvert] = useState("");

    useEffect(() => {
        console.log(currentConvert);
    }, [currentConvert]);

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
        },
        {
            logo: Tiktok,
            name: "TikTok Converter",
            type: "TikTok",
        },
        {
            logo: PornHub,
            name: "PornHub Converter",
            type: "PornHub",
        },
        {
            logo: YouTube,
            name: "Youtube Converter",
            type: "Youtube",
        },
    ]

    return (
        <DataProvider.Provider value={{ pages, converters, conversionInfo, switchConverter, serverReq, currentConvert, setCurrentConvert }}>
            {children}
        </DataProvider.Provider>
    );
}

export default AppData;