import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-title-wrapper">
                        <h2 className="section-title">ABOUT</h2>
                    </div>
                    <div className="about-content">
                        <p className="large-text">
                            Expertise em gerenciamento de bancos de dados crítico e desenvolvimento de aplicações escaláveis.
                        </p>
                        <p className="secondary-text">
                            Como DBA e Desenvolvedor, minha missão é garantir que os dados estejam seguros, disponíveis e performáticos, enquanto construo software que resolve problemas reais. Tenho foco especial em otimização de queries, modelagem de dados e arquitetura de backend.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">99.9%</span>
                                <span className="stat-label">UPTIME TARGET</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10k+</span>
                                <span className="stat-label">QUERIES OPTIMIZED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
