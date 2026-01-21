import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <h1 className="hero-title fade-in">
                    BUILDING <br />
                    <span>DATABASES</span> <br />
                    & SOFTWARE
                </h1>
                <p className="hero-description fade-in" style={{ animationDelay: '0.2s' }}>
                    Database Administrator & Software Engineer. <br />
                    Especialista em arquitetura de dados e desenvolvimento de sistemas robustos.
                </p>
                <div className="hero-scroll fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="scroll-line"></div>
                    <span>SCROLL DOWN</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
