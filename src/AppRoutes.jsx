import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

const AppRoutes = ({ children }) => {
    return (
        <Router>
            {children}
            <Routes>
                <Route path="/" />
                <Route path="/about" />
                <Route path="/guide" />
                <Route path="/contact" />
            </Routes>
        </Router>
    );
}

export default AppRoutes;