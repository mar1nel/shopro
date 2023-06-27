import React from 'react';
import { FaTelegram, FaInstagram } from 'react-icons/fa';
import './footer.css';
import { AcmeLogo } from "../AcmeLogo";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo">
                    <AcmeLogo height="200"/>
                </div>
                <div className="contact-info">
                    <h4>Contact</h4>
                    <p>Telefon: +40 74872012</p>
                    <p>Email: fumishoara@info.com</p>
                    <p>Adresa: Aleea Studentilor, Timisoara</p>
                </div>
                <div className="social-media">
                    <h4>Follow us</h4>
                    <div className="social-icons">
                        <a href="#"><FaTelegram /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="extra-info">
                <p>Please don't send nudes and dickpicks in exchange for free vapes. Or do, we don't care.</p>
            </div>
        </footer>
    );
};

export default Footer;
