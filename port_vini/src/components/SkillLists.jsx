import React from 'react';

const SkillLists = () => {
    const categories = [
        {
            title: "DATABASES",
            skills: ["SQL Server (T-SQL)", "PostgreSQL", "MySQL / MariaDB", "MongoDB", "Redis (Caching)"]
        },
        {
            title: "DEVELOPMENT",
            skills: ["JavaScript / TypeScript", "Node.js (Express)", "React.js", "C# / .NET", "Python (Scripts)"]
        },
        {
            title: "OPERATIONS",
            skills: ["Docker / Containers", "Query Optimization", "Database Mirroring", "Backup Strategies", "CI/CD Pipelines"]
        }
    ];

    return (
        <section className="skill-lists">
            <div className="container">
                <div className="skill-lists-grid">
                    {categories.map((cat, index) => (
                        <div key={index} className="skill-list-category">
                            <h3 className="category-title">{cat.title}</h3>
                            <ul className="skills-ul">
                                {cat.skills.map((skill, si) => (
                                    <li key={si}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillLists;
