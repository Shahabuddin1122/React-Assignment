import { useState } from 'react';
import styles from './note.module.css';
import tasksData from '../../models/task-items/tasks.json';
import type { Task } from "../../types/task-item/task.ts";

const Note = () => {
    const [tasks] = useState<Task[]>(tasksData);
    const [filter, setFilter] = useState<'All' | 'Completed' | 'Pending'>('All');
    const [activeTab, setActiveTab] = useState<'Recent' | 'Highlighted'>('Recent');

    const filteredTasks = tasks.filter(task => {
        const matchesState =
            filter === 'Completed' ? task.state === 'Completed' :
                filter === 'Pending' ? task.state !== 'Completed' :
                    true;

        const matchesTab =
            activeTab === 'Highlighted' ? task.favourite : true;

        return matchesState && matchesTab;
    });



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
                            <div className={styles.cardHeader}>
                                <h3>{task.title}</h3>
                                <button>⋯</button>
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

export default Note;
