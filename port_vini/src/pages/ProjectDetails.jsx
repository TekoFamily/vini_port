import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const projectsData = {
    pt: {
        1: { title: "Otimização de Performance SQL", category: "DBA / OTIMIZAÇÃO", desc: "Redução de 70% na latência de consultas críticas através de análise de planos de execução, criação estratégica de índices e refatoração de T-SQL.", year: "2024", client: "Tech Solutions" },
        2: { title: "Microsserviços Escaláveis", category: "DESENVOLVIMENTO BACKEND", desc: "Arquitetura de microsserviços usando Node.js e Docker, integrada com PostgreSQL para alta disponibilidade e escalabilidade.", year: "2023", client: "Global Fintech" },
        3: { title: "Migração de Banco Financeiro", category: "DBA / MIGRAÇÃO", desc: "Migração complexa de banco de dados legado (On-premise) para Cloud, garantindo integridade total de dados e zero downtime.", year: "2023", client: "Sovereign Bank" },
        4: { title: "Monitoramento em Tempo Real", category: "FULL STACK", desc: "Dashboard de monitoramento em tempo real para status de servidores de banco de dados e alertas de integridade.", year: "2024", client: "DataWatch Corp" },
        5: {
            title: "Monitor de Relatórios - Livros & Vendas",
            category: "BACKEND / BANCO DE DADOS",
            desc: `Sistema de monitoramento robusto focado em performance extrema e integridade de dados para gestão de grandes volumes de informações (Livros, Autores e Vendas).

📈 PERFORMANCE & ESCALABILIDADE (Ouro Metrificado):
• Paginação Server-Side (SQL): Migração de carregamento massivo para paginação por banco (OFFSET/LIMIT). 
  - Antes: Cada requisição carregava ~80.000 registros na memória.
  - Depois: Apenas 10 registros por requisição. Redução de 99,99% no volume de dados trafegados por página.
• Latência O(1): Resposta constante independente do tamanho da base. O sistema escala para milhões de registros sem degradação de performance detectável pelo usuário.
• Ingestão via Stored Procedures: Reduz drasticamente os "round-trips" entre App e Banco. Centraliza lógica complexa e inserts em transações atômicas, eliminando múltiplas conexões lentas por linha do CSV.

💻 EFICIÊNCIA DE RECURSOS:
• Memória & CPU: Elimina pressão de RAM e Garbage Collection no backend ao evitar buffers gigantes de dados brutos.
• Otimização de Rede: Minimiza latência percebida através de navegação assíncrona (AJAX), priorizando a experiência do usuário (UX como métrica de performance).

📊 INDICADORES TÉCNICOS:
• Escalabilidade: Linear (suporta crescimento massivo de dados sem refatoração).
• throughput de Importação: Otimizado por processamento atômico no banco.
• Estabilidade: Integridade referencial garantida via Normalização e Upsert (ON DUPLICATE KEY).`,
            year: "2026",
            client: "Projeto Open Source",
            stack: ["Python", "Flask", "MySQL", "Stored Procedures", "AJAX", "REST API", "Pandas"],
            link: "https://github.com/ViniScooper/monitor_relatorios"
        },
    },
    en: {
        1: { title: "Query Performance Tuning", category: "DBA / OPTIMIZATION", desc: "70% reduction in critical query latency through execution plan analysis, strategic index creation, and T-SQL refactoring.", year: "2024", client: "Tech Solutions" },
        2: { title: "Scalable Microservices", category: "BACKEND DEV", desc: "Microservices architecture using Node.js and Docker, integrated with PostgreSQL for high availability and scalability.", year: "2023", client: "Global Fintech" },
        3: { title: "Financial DB Migration", category: "DBA / MIGRATION", desc: "Complex legacy database migration (On-premise) to Cloud, ensuring total data integrity and zero downtime.", year: "2023", client: "Sovereign Bank" },
        4: { title: "Real-time Monitoring Tool", category: "FULL STACK", desc: "Real-time monitoring dashboard for database server status and integrity alerts.", year: "2024", client: "DataWatch Corp" },
        5: {
            title: "Report Monitor - Books & Sales",
            category: "BACKEND / DATABASE",
            desc: `Robust monitoring system focused on extreme performance and data integrity for managing large volumes of information (Books, Authors, and Sales).

📈 PERFORMANCE & SCALABILITY (Key Metrics):
• Server-Side Pagination (SQL): Migration from massive loading to database-side pagination (OFFSET/LIMIT).
  - Before: Each request loaded ~80,000 records into memory.
  - After: Only 10 records per request. 99.99% reduction in data traffic per page.
• O(1) Latency: Constant response time regardless of database size. The system scales to millions of records without detectable performance degradation.
• Stored Procedures Ingestion: Dramatically reduces app-to-database round-trips. Centralizes complex logic and inserts into atomic transactions, eliminating multiple slow connections per CSV line.

💻 RESOURCE EFFICIENCY:
• Memory & CPU: Eliminates RAM and Garbage Collection pressure on the backend by avoiding giant raw data buffers.
• Network Optimization: Minimizes perceived latency through asynchronous navigation (AJAX), prioritizing user experience (UX as a performance metric).

📊 TECHNICAL INDICATORS:
• Scalability: Linear (supports massive data growth without refactoring).
• Import Throughput: Optimized by atomic processing in the database.
• Stability: Referential integrity guaranteed via Normalization and Upsert (ON DUPLICATE KEY).`,
            year: "2026",
            client: "Open Source Project",
            stack: ["Python", "Flask", "MySQL", "Stored Procedures", "AJAX", "REST API", "Pandas"],
            link: "https://github.com/ViniScooper/monitor_relatorios"
        },
    }
};

const images = {
    1: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop",
    2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    3: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2340&auto=format&fit=crop",
    4: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop",
    5: "/monitor_relatorios.png"
};

const ProjectDetails = () => {
    const { id } = useParams();
    const { language } = useLanguage();
    const t = translations[language].projectDetails;
    const project = projectsData[language][id];

    if (!project) return <div className="container" style={{ padding: '20rem 0' }}>{t.notFound}</div>;

    return (
        <div className="project-details">
            <div className="container">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> {t.back}
                </Link>

                <header className="project-header">
                    <span className="work-category">{project.category}</span>
                    <h1 className="project-title">{project.title}</h1>
                </header>

                <div className="project-main-image">
                    <img src={images[id]} alt={project.title} />
                </div>

                <div className="project-info-grid">
                    <div className="project-description">
                        <h3>{t.overview}</h3>
                        <p>{project.desc}</p>

                        {project.stack && (
                            <div className="project-stack">
                                {project.stack.map((tech, index) => (
                                    <span key={index} className="stack-tag">{tech}</span>
                                ))}
                            </div>
                        )}

                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                <Github size={18} /> {t.viewGithub}
                            </a>
                        )}
                    </div>
                    <div className="project-meta">
                        <div className="meta-item">
                            <h4>{t.year}</h4>
                            <span>{project.year}</span>
                        </div>
                        <div className="meta-item">
                            <h4>{t.client}</h4>
                            <span>{project.client}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
