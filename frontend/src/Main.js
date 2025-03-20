// Main.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutUs from './components/AboutUs';

const Main = () => {
    return (
        <BrowserRouter basename="/WebTechnologiesProject">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Main;
