// Main.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutUs from './components/AboutUs';

const Main = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </HashRouter>
    );
};

export default Main;
