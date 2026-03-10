import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const defaultWorks = [
    { id: 7, title: "PDV Byte System", category: "FULL STACK / AZURE", image: "/Gemini_Generated_Image_uuie5duuie5duuie.png" },
    { id: 6, title: "ByteDataEngine Lakehouse", category: "DATA ENGINEERING / OCI", image: "/bytedata_dashboard.png" },
    { id: 1, title: "Query Performance Lab", category: "DBA / ORACLE", image: "/Gemini_Generated_Image_tx135ptx135ptx13.png" },
    { id: 8, title: "Sistema de Gestão Acadêmica", category: "FULL STACK / MERN", image: "/ETE4444.png" },
    { id: 2, title: "Scalable Microservices", category: "BACKEND / DATABASE", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop" },
    { id: 3, title: "Financial DB Migration", category: "DATABASE ENGINEER", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2340&auto=format&fit=crop" },
    { id: 4, title: "Database Monitoring Tool", category: "DBA / AUTOMATION", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop" },
    { id: 5, title: "Oracle PL-SQL Report Monitor", category: "BACKEND / ORACLE PL-SQL", image: "/monitor_relatorios.png" },
];

const SortableProjectCard = ({ work }) => {
    const { language } = useLanguage();
    const t = translations[language].works;
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: work.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 10 : 1,
        position: 'relative',
        touchAction: 'none' // Prevent scrolling when dragging on mobile
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Link to={`/project/${work.id}`} className={`work-item ${isDragging ? 'dragging' : ''}`} draggable={false}>
                <div className="work-image-wrapper">
                    <img src={work.image} alt={work.title} className="work-image" draggable={false} />
                    <div className="work-overlay">
                        <span>{t.details}</span>
                    </div>
                </div>
                <div className="work-info">
                    <span className="work-category">{work.category}</span>
                    <h3 className="work-title">{work.title}</h3>
                </div>
            </Link>
        </div>
    );
};

const Works = () => {
    const { language } = useLanguage();
    const t = translations[language].works;

    const [projectList, setProjectList] = useState(() => {
        const savedOrder = localStorage.getItem('portfolio_works_order_v3');
        if (savedOrder) {
            try {
                const parsedIds = JSON.parse(savedOrder);
                const orderedWorks = [];
                parsedIds.forEach(id => {
                    const project = defaultWorks.find(w => w.id === id);
                    if (project) orderedWorks.push(project);
                });
                defaultWorks.forEach(w => {
                    if (!orderedWorks.find(ow => ow.id === w.id)) orderedWorks.push(w);
                });
                return orderedWorks;
            } catch (e) {
                return defaultWorks;
            }
        }
        return defaultWorks;
    });

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5, // Start drag only if moved 5px so clicks can still happen
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setProjectList((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);

                const newOrder = arrayMove(items, oldIndex, newIndex);
                localStorage.setItem('portfolio_works_order_v3', JSON.stringify(newOrder.map(item => item.id)));
                return newOrder;
            });
        }
    };

    return (
        <section id="works" className="works">
            <div className="container">
                <h2 className="section-title">{t.title}</h2>
                <DndContext 
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext 
                        items={projectList}
                        strategy={rectSortingStrategy}
                    >
                        <div className="works-grid">
                            {projectList.map((work) => (
                                <SortableProjectCard key={work.id} work={work} />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
                <div className="drag-hint" style={{ marginTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
                    {t.dragHint}
                </div>
            </div>
        </section>
    );
};

export default Works;
