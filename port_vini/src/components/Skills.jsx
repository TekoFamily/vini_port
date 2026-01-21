import React from 'react';
import { Database, Code, Shield, Terminal, Zap, Layers } from 'lucide-react';

const skills = [
    { icon: <Database size={40} />, title: "DB Administration", desc: "Gestão, backup e tuning de SQL Server, PostgreSQL e MySQL." },
    { icon: <Code size={40} />, title: "Backend Dev", desc: "Desenvolvimento de APIs robustas com Node.js e C#." },
    { icon: <Zap size={40} />, title: "Performance Tuning", desc: "Otimização de consultas lentas e redução de latência de IO." },
    { icon: <Shield size={40} />, title: "Security", desc: "Implementação de políticas de acesso e segurança de dados." },
    { icon: <Layers size={40} />, title: "Data Modeling", desc: "Arquitetura e modelagem relacional e não-relacional." },
    { icon: <Terminal size={40} />, title: "Automation", desc: "Scripts para automação de tarefas e rotinas de banco." },
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">SKILLS</h2>
                <div className="skills-carousel">
                    <div className="skills-track">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <h3 className="skill-card-title">{skill.title}</h3>
                                <p className="skill-card-desc">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
