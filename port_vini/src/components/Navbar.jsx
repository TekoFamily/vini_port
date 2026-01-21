import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        if (location.pathname !== '/') {
            e.preventDefault();
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo-wrapper">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="navbar-logo-svg"
                    >
                        <path
                            d="M13 2L3 14H11L9 22L21 10H13L15 2Z"
                            className="logo-path"
                        />
                    </svg>
                    <span className="logo-text">Vini</span>
                </Link>
                <ul className="nav-links">
                    <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>SOBRE</a></li>
                    <li><a href="#works" onClick={(e) => handleNavClick(e, 'works')}>PROJETOS</a></li>
                    <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>SKILLS</a></li>
                    <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>CONTATO</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
