import React from "react";
import { useState } from 'react';
import Facebook from "./assets/converters/svg/facebook.svg";
import PornHub from "./assets/converters/svg/pornhub.svg";
import Tiktok from "./assets/converters/svg/tiktok.svg";
import YouTube from "./assets/converters/svg/youtube.svg";

export const DataProvider = React.createContext();

const AppData = ({ children }) => {

    const [convertionInfo, setConvertionInfo] = useState({
        type: "YouTube",
        currentUrl: null, //current url that the user entered
        prevURL: null, //previous url that the user entered. This will changed once the user pressed the ConvertNext button
    });

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
        <DataProvider.Provider value={{ pages, converters }}>
            {children}
        </DataProvider.Provider>
    );
}

export default AppData;