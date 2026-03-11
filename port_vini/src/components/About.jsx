import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import { Github, Linkedin } from 'lucide-react';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language].about;
    const navT = translations[language].nav;
    const heroT = translations[language].hero;

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-title-wrapper">
                        <h2 className="section-title">{navT.about}</h2>
                        <div className="about-image-container fade-in" style={{ animationDelay: '0.3s' }}>
                            <img src="/perfil.jpeg" alt="Vini" className="about-profile-img" />
                            <div className="about-socials">
                                <a href="https://github.com/ViniScooper" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                                <a href="https://linkedin.com/in/vini-scooper" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                            </div>
                            <div className="about-availability">
                                {heroT.remote}
                            </div>
                        </div>
                    </div>
                    <div className="about-content">
                        <p className="large-text">
                            {t.title}
                        </p>
                        <p className="secondary-text">
                            {t.description}
                        </p>
                        <div className="about-stats">
                            {t.stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <span className="stat-number">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
