import React from 'react';
import { FaTelegram, FaInstagram } from 'react-icons/fa';
import './footer.css';
import { AcmeLogo } from "../AcmeLogo";

const Footer = () => {

    // const logoHeight = window.innerWidth <= 420 ? 20 : 200;

    return (
        <footer className="footer">
            <div className="footer-container">
                {/*<div className="logo">*/}
                {/*    <AcmeLogo height={logoHeight}/>*/}
                {/*</div>*/}
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
                <p>Please don't send nudes or dickpicks <br/> on IG or TG in exchange for free vapes. <br/> Or do, we don't care. ( but we will check them all ) </p>
            </div>
        </footer>
    );
};

export default Footer;
