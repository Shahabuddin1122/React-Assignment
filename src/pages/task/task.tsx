import React, { useState } from 'react';
import styles from './task.module.css';
import type {TaskProps} from "../../types/props/task";


const Task = ({ tasks, setTasks }: TaskProps) => {
    const [filter, setFilter] = useState<'All' | 'Completed' | 'Pending'>('All');
    const [activeTab, setActiveTab] = useState<'Recent' | 'Highlighted'>('Recent');
    const [menuOpenId, setMenuOpenId] = useState<number | null>(null);

    const filteredTasks = tasks
        .filter(task => {
            const matchesState =
                filter === 'Completed' ? task.state === 'Completed' :
                    filter === 'Pending' ? task.state !== 'Completed' :
                        true;

            const matchesTab =
                activeTab === 'Highlighted' ? task.favourite : true;

            return matchesState && matchesTab;
        })
        .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());


    const handleDelete = (id: number) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    const handleToggleComplete = (id: number) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, state: task.state === 'Completed' ? 'Pending' : 'Completed' }
                    : task
            )
        );
    };

    const handleToggleFavourite = (id: number) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, favourite: !task.favourite }
                    : task
            )
        );
    };





    return (
        <div className={styles.content}>
            <header className={styles.header}>
                <p>Ready to start arrange tasks?</p>
                <h1>Shahabuddin’s Tasks</h1>
            </header>

            <div className={styles.noteSection}>
                <div className={styles.noteHeader}>
                    <p></p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className={styles.tabs}>
                            <button
                                className={activeTab === 'Recent' ? styles.activeTab : styles.tab}
                                onClick={() => setActiveTab('Recent')}
                            >
                                Recent
                            </button>
                            <button
                                className={activeTab === 'Highlighted' ? styles.activeTab : styles.tab}
                                onClick={() => setActiveTab('Highlighted')}
                            >
                                Highlighted
                            </button>
                        </div>

                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value as typeof filter)}
                            className={styles.dropdown}
                        >
                            <option value="All">All</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Not Completed</option>
                        </select>
                    </div>
                </div>

                <div className={styles.noteGrid}>
                    {filteredTasks.map(task => (
                        <div
                            key={task.id}
                            className={`${styles.card} ${styles.blueCard} ${task.favourite ? styles.favCard : ''}`}
                        >
                            <div className={styles.cardHeader} style={{ position: 'relative' }}>
                                <h3>{task.title}</h3>
                                <button onClick={() => setMenuOpenId(menuOpenId === task.id ? null : task.id)}>
                                    ⋯
                                </button>

                                {menuOpenId === task.id && (
                                    <div className={styles.dropdownMenu}>
                                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                                        <button onClick={() => handleToggleComplete(task.id)}>
                                            {task.state === 'Completed' ? 'Mark as Pending' : 'Mark as Completed'}
                                        </button>
                                        <button onClick={() => handleToggleFavourite(task.id)}>
                                            {task.favourite ? 'Unfavourite' : 'Favourite'}
                                        </button>
                                    </div>
                                )}
                            </div>
                            <p>{task.description}</p>
                            <div className={styles.cardFooter}>
                                <span>{new Date(task.time).toLocaleDateString()}</span>
                                <div className={styles.icons}>
                                    <span>{task.state === 'Completed' ? '✅' : '🕒'}</span>
                                    <span>{task.favourite ? '⭐' : '☆'}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Task;
