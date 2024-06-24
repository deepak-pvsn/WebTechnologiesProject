import React from 'react';
import '../css/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1 className="text-center mb-4">About Us</h1>
            <h2 className="text-center mb-4">Group 6</h2>
            <h3 className="text-center mb-4">Topic: "A Survey on DNS over HTTPS"</h3>
            <div className="team-member">
                <h4>Venkata Sai Polakam</h4>
                <p>Contribution: Research and analysis on DNS over HTTPS protocols.</p>
                <p>Banner ID: 001309439</p>
                <p>Email: venkatasai.polakam@slu.edu</p>
            </div>
            <div className="team-member">
                <h4>Krishnakanth Burugu</h4>
                <p>Contribution: Development of the webpage</p>
                <p>Banner ID: 001303801</p>
                <p>Email: krishnakanth.burugu@slu.edu</p>
            </div>
            <div className="team-member">
                <h4>Sai Charan Lenkallapally</h4>
                <p>Contribution: Reporting and Delivery on time</p>
                <p>Banner ID: 001301385</p>
                <p>Email: saicharan.lenkallapally@slu.edu</p>
            </div>
        </div>
    );
};

export default AboutUs;
