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
    ]

    return (
        <DataProvider.Provider value={{ pages }}>
            {children}
        </DataProvider.Provider>
    );
}

export default AppData;