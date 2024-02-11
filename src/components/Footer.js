import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__text">© {new Date().getFullYear()} Superhero Care. All rights reserved.</p>
                {}
            </div>
        </footer>
    );
}

export default Footer;
