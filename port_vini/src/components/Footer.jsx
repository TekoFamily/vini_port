import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <span className="footer-logo">PORTFOLIO</span>
                    <div className="footer-nav">
                        <a href="#about">ABOUT</a>
                        <a href="#works">WORKS</a>
                        <a href="#skills">SKILLS</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 VINI PORT. ALL RIGHTS RESERVED.</p>
                    <div className="footer-btm-links">
                        <a href="#">PRIVACY POLICY</a>
                        <a href="#">TERMS OF SERVICE</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
