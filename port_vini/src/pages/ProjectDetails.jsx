import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const projects = {
    1: { title: "Query Performance Tuning", category: "DBA / OPTIMIZATION", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop", desc: "Redução de 70% na latência de consultas críticas através de análise de planos de execução, criação estratégica de índices e refatoração de T-SQL.", year: "2024", client: "Tech Solutions" },
    2: { title: "Scalable Microservices", category: "BACKEND DEV", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop", desc: "Arquitetura de microsserviços usando Node.js e Docker, integrada com PostgreSQL para alta disponibilidade e escalabilidade.", year: "2023", client: "Global Fintech" },
    3: { title: "Financial DB Migration", category: "DBA / MIGRATION", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2340&auto=format&fit=crop", desc: "Migração complexa de banco de dados legado (On-premise) para Cloud, garantindo integridade total de dados e zero downtime.", year: "2023", client: "Sovereign Bank" },
    4: { title: "Real-time Monitoring Tool", category: "FULL STACK", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop", desc: "Dashboard de monitoramento em tempo real para status de servidores de banco de dados e alertas de integridade.", year: "2024", client: "DataWatch Corp" },
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects[id];

    if (!project) return <div className="container" style={{ padding: '20rem 0' }}>Project not found</div>;

    return (
        <div className="project-details">
            <div className="container">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> BACK TO HOME
                </Link>

                <header className="project-header">
                    <span className="work-category">{project.category}</span>
                    <h1 className="project-title">{project.title}</h1>
                </header>

                <div className="project-main-image">
                    <img src={project.image} alt={project.title} />
                </div>

                <div className="project-info-grid">
                    <div className="project-description">
                        <h3>PROJECT OVERVIEW</h3>
                        <p>{project.desc}</p>
                    </div>
                    <div className="project-meta">
                        <div className="meta-item">
                            <h4>YEAR</h4>
                            <span>{project.year}</span>
                        </div>
                        <div className="meta-item">
                            <h4>CLIENT</h4>
                            <span>{project.client}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
