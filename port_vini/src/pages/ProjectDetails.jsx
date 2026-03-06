import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const projectsData = {
    pt: {
        1: {
            title: "Oracle PL/SQL Performance Lab",
            category: "DBA / ORACLE",
            desc: `Otimização extrema de performance em ambiente Oracle, reduzindo o tempo de execução de consultas complexas de 12s para 300ms (97% de melhoria).
            
🛠️ ENGENHARIA DE PERFORMANCE:
• Análise de Execution Plans: Identificação de gargalos em Full Table Scans e gargalos de I/O em joins ineficientes.
• Reestruturação de Índices: Implementação de índices compostos e funcionais baseados no comportamento real da aplicação.
• Tuning de PL/SQL: Refatoração de loops e cursores lentos para operações em massa (Bulk Collect / Forall), reduzindo o overhead de troca de contexto.
• Estatísticas & Histogramas: Calibração de estatísticas para garantir que o otimizador escolha o melhor caminho para dados com alta dispersão.`,
            year: "2024",
            client: "Tech Solutions",
            stack: ["Oracle Database", "PL/SQL", "AWR / ASH Reports", "Execution Plans", "Performance Tuning"]
        },
        2: {
            title: "Microsserviços Escaláveis & Dados",
            category: "BACKEND / DATABASE",
            desc: "Arquitetura de microsserviços usando Node.js e Docker, integrada com PostgreSQL. Foco em garantir a consistência eventual e alta disponibilidade dos dados em ambientes distribuídos.",
            year: "2023",
            client: "Global Fintech",
            stack: ["Node.js", "Docker", "PostgreSQL", "Redis", "Microservices"]
        },
        3: {
            title: "Financial DB Migration",
            category: "DATABASE ENGINEER",
            desc: `Migração crítica de banco de dados financeiro para a nuvem, garantindo zero perda de dados e disponibilidade contínua durante a transição.
            
🚀 IMPACTO & RESULTADOS:
• Ajuste de Schemas: Re-modelagem de tabelas legadas para otimizar o armazenamento e a performance em ambientes Cloud.
• Automação de Deploy: Pipelines automatizados para migração controlada de esquemas e dados, reduzindo o erro humano.
• Integridade de Dados: Validação rigorosa via scripts PL/SQL para garantir a paridade total entre o sistema de origem e o destino.`,
            year: "2023",
            client: "Sovereign Bank",
            stack: ["SQL Server", "Oracle Cloud (OCI)", "Shell Scripting", "Schema Mapping"]
        },
        4: {
            title: "Database Monitoring Tool",
            category: "DBA / AUTOMATION",
            desc: "Dashboard de monitoramento para status de instâncias de banco de dados, alertas de integridade e predição de crescimento de storage utilizando Shell Automation e Node.js.",
            year: "2024",
            client: "DataWatch Corp",
            stack: ["Node.js", "Shell Scripting", "Prometheus", "Grafana"]
        },
        5: {
            title: "Oracle PL-SQL Report Monitor",
            category: "BACKEND / ORACLE PL-SQL",
            desc: `Sistema de monitoramento robusto focado em performance extrema e integridade de dados para gestão de grandes volumes de informações (Livros, Autores e Vendas).

📈 PERFORMANCE & ESCALABILIDADE:
• Paginação via Oracle/SQL: Redução drástica de memória ao carregar apenas o necessário por página (OFFSET/FETCH).
• Ingestão Atmosférica: Utilização de Stored Procedures complexas para centralizar a lógica de importação de 80k+ registros, eliminando "round-trips" de rede.
• Latência O(1): Resposta constante e rápida, independentemente de a base ter milhares ou milhões de registros.`,
            year: "2026",
            client: "Projeto Open Source",
            stack: ["Python", "Flask", "Oracle PL/SQL", "Stored Procedures", "AJAX", "Pandas"],
            link: "https://github.com/ViniScooper/monitor_relatorios"
        },
        6: {
            title: "ByteDataEngine Lakehouse",
            category: "DATA ENGINEERING / OCI",
            desc: `Plataforma "Metadata-Driven" projetada para centralização, automação e visualização de inteligência de negócios rodando em OCI.

📊 MÓDULOS & FUNCIONALIDADES:
• Pipelines Automáticos: Orquestração de tarefas para replicação de bancos e ingestão via Robôs (Push/Pull).
• Auditoria de Dados: Registro imutável de eventos e falhas críticas, garantindo rastreabilidade total (Audit Logs).
• Governance: Controle de acesso granular (RBAC) e central de configurações de ambiente estruturada.`,
            year: "2026",
            client: "ByteData Inc.",
            stack: ["Python (Flask)", "React 18", "MySQL 8 (JSON)", "OCI", "Docker", "OData v4"],
            link: "https://github.com/ViniScooper/bytedata-order-api"
        },
        7: {
            title: "PDV & Inventory Control",
            category: "FULL STACK / DATABASE",
            desc: `Sistema de Ponto de Venda focado em integridade de dados e segurança de nível empresarial.

🔐 SEGURANÇA & DADOS:
• Modelagem Escalável: Desenho de esquema utilizando Prisma ORM seguindo padrões rigorosos de normalização.
• Performance de Busca: Estratégias de indexação em campos de busca frequente no PostgreSQL para otimizar filtros complexos.
• Proteção JWT/RBAC: Controle granular de acesso para operações críticas no banco de dados.`,
            year: "2026",
            client: "Pequenos Comércios",
            stack: ["NestJS", "Prisma", "PostgreSQL", "JWT / RBAC", "React", "Docker"],
            link: "https://github.com/ViniScooper/pdv_byte"
        },
    },
    en: {
        1: {
            title: "Oracle PL/SQL Performance Lab",
            category: "DBA / ORACLE",
            desc: `Extreme performance optimization in an Oracle environment, reducing complex query execution time from 12s to 300ms (97% improvement).
            
🛠️ PERFORMANCE ENGINEERING:
• Execution Plan Analysis: Identification of bottlenecks in Full Table Scans and I/O overhead in inefficient joins.
• Index Restructuring: Implementation of composite and functional indexes based on real application workload.
• PL/SQL Tuning: Refactoring slow loops and cursors into set-based operations (Bulk Collect / Forall), reducing context-switching overhead.
• Statistics & Histograms: Calibration of stats to ensure the optimizer chooses the best path for skewed data distributions.`,
            year: "2024",
            client: "Tech Solutions",
            stack: ["Oracle Database", "PL/SQL", "AWR / ASH Reports", "Execution Plans", "Performance Tuning"]
        },
        2: {
            title: "Scalable Microservices & Data",
            category: "BACKEND / DATABASE",
            desc: "Microservices architecture using Node.js and Docker, integrated with PostgreSQL. Focus on ensuring eventual consistency and high availability of data in distributed environments.",
            year: "2023",
            client: "Global Fintech",
            stack: ["Node.js", "Docker", "PostgreSQL", "Redis", "Microservices"]
        },
        3: {
            title: "Financial DB Migration",
            category: "DATABASE ENGINEER",
            desc: `Mission-critical financial database migration to the cloud, ensuring zero data loss and continuous availability during transition.
            
🚀 IMPACT & RESULTS:
• Schema Adjustments: Remodeling legacy tables to optimize storage and performance in Cloud environments.
• Deploy Automation: Automated pipelines for controlled schema and data migration, reducing human error.
• Data Integrity: Rigorous validation via PL/SQL scripts to ensure 100% parity between source and destination systems.`,
            year: "2023",
            client: "Sovereign Bank",
            stack: ["SQL Server", "Oracle Cloud (OCI)", "Shell Scripting", "Schema Mapping"]
        },
        4: {
            title: "Database Monitoring Tool",
            category: "DBA / AUTOMATION",
            desc: "Monitoring dashboard for database instance status, integrity alerts, and storage growth prediction using Shell Automation and Node.js.",
            year: "2024",
            client: "DataWatch Corp",
            stack: ["Node.js", "Shell Scripting", "Prometheus", "Grafana"]
        },
        5: {
            title: "Oracle PL-SQL Report Monitor",
            category: "BACKEND / ORACLE PL-SQL",
            desc: `Robust monitoring system focused on extreme performance and data integrity for managing large volumes of information (Books, Authors, and Sales).

📈 PERFORMANCE & SCALABILITY:
• Oracle/SQL Pagination: Drastic memory reduction by loading only what is needed per page (OFFSET/FETCH).
• Atomic Ingestion: Using complex Stored Procedures to centralize import logic for 80k+ records, eliminating network round-trips.
• O(1) Latency: Constant and fast response, regardless of whether the database has thousands or millions of records.`,
            year: "2026",
            client: "Open Source Project",
            stack: ["Python", "Flask", "Oracle PL/SQL", "Stored Procedures", "AJAX", "Pandas"],
            link: "https://github.com/ViniScooper/monitor_relatorios"
        },
        6: {
            title: "ByteDataEngine Lakehouse",
            category: "DATA ENGINEERING / OCI",
            desc: `A "Metadata-Driven" platform designed for centralization, automation, and visualization of business intelligence running on OCI.

📊 MODULES & FEATURES:
• Automated Pipelines: Task orchestration for database replication and robot-based ingestion (Push/Pull).
• Data Audit: Immutable event logging and critical failure tracking, ensuring full traceability (Audit Logs).
• Governance: Granular access control (RBAC) and structured environment settings management.`,
            year: "2026",
            client: "ByteData Inc.",
            stack: ["Python (Flask)", "React 18", "MySQL 8 (JSON)", "OCI", "Docker", "OData v4"],
            link: "https://github.com/ViniScooper/bytedata-order-api"
        },
        7: {
            title: "POS & Inventory Control",
            category: "FULL STACK / DATABASE",
            desc: `Point of Sale system focused on data integrity and enterprise-grade security.

🔐 SECURITY & DATA:
• Scalable Modeling: Schema design using Prisma ORM following strict normalization standards.
• Search Performance: Indexing strategies on frequent search fields in PostgreSQL to optimize complex filters.
• JWT/RBAC Protection: Granular access control for critical database operations.`,
            year: "2026",
            client: "Small Businesses",
            stack: ["NestJS", "Prisma", "PostgreSQL", "JWT / RBAC", "React", "Docker"],
            link: "https://github.com/ViniScooper/pdv_byte"
        },
    }
};

const images = {
    "1": "/Gemini_Generated_Image_tx135ptx135ptx13.png",
    "2": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    "3": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2340&auto=format&fit=crop",
    "4": "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop",
    "5": "/monitor_relatorios.png",
    "6": "/bytedata_dashboard.png",
    "7": "/pdv.png"
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

                {id === '6' && (
                    <div className="project-secondary-image" style={{ marginTop: '2rem' }}>
                        <img src="/bytedata_login.png" alt="ByteData Login" style={{ width: '100%', borderRadius: '12px' }} />
                    </div>
                )}

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
