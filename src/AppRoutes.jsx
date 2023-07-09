import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import GetStarted from "./pages/GetStarted";
import Conversion from "./conversion/conv";
import About from "./pages/About";
import Guide from "./pages/Guide";
import Contact from "./pages/Contact";
import DownloadSection from "./conversion/download";

const AppRoutes = ({ children }) => {
    return (
        <Router>
            {children}
            <Routes>
                <Route path="/" element={<GetStarted />}>
                    <Route exact path={"d"} element={<DownloadSection />} />
                    <Route exact path={"c"} element={<Conversion />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;