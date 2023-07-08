import React from "react";

export const DataProvider = React.createContext();

const AppData = ({ children }) => {

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
            icon: "",
            name: "Youtube Converter",
            type: "Youtube",
        },
        {
            icon: "",
            name: "Facebook Converter",
            type: "Facebook",
        },
        {
            icon: "",
            name: "TikTok Converter",
            type: "TikTok",
        },
        {
            icon: "",
            name: "PornHub Converter",
            type: "PornHub",
        },
    ]

    return (
        <DataProvider.Provider value={{ pages, converters }}>
            {children}
        </DataProvider.Provider>
    );
}

export default AppData;