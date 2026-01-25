import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language].about;
    const navT = translations[language].nav;

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-title-wrapper">
                        <h2 className="section-title">{navT.about}</h2>
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
