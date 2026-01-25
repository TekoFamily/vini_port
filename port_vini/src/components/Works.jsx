import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const works = [
    { id: 1, title: "Query Performance Tuning", category: "DBA / OPTIMIZATION", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop" },
    { id: 2, title: "Scalable Microservices", category: "BACKEND DEV", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop" },
    { id: 3, title: "Financial DB Migration", category: "DBA / MIGRATION", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2340&auto=format&fit=crop" },
    { id: 4, title: "Real-time Monitoring Tool", category: "FULL STACK", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop" },
    { id: 5, title: "Monitor de Relatórios - Livros & Vendas", category: "BACKEND / DATABASE", image: "/monitor_relatorios.png" },
];

const Works = () => {
    const { language } = useLanguage();
    const t = translations[language].works;

    return (
        <section id="works" className="works">
            <div className="container">
                <h2 className="section-title">{t.title}</h2>
                <div className="works-grid">
                    {works.map((work) => (
                        <Link to={`/project/${work.id}`} key={work.id} className="work-item">
                            <div className="work-image-wrapper">
                                <img src={work.image} alt={work.title} className="work-image" />
                                <div className="work-overlay">
                                    <span>{t.details}</span>
                                </div>
                            </div>
                            <div className="work-info">
                                <span className="work-category">{work.category}</span>
                                <h3 className="work-title">{work.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
