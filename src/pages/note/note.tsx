import { useState } from 'react';
import styles from './note.module.css';
import tasksData from '../../models/task-items/tasks.json'
import type {Task} from "../../types/task-item/task.ts";

const Note = () => {
    const [tasks] = useState<Task[]>(tasksData);

    return (
        <div className={styles.content}>
            <header className={styles.header}>
                <p>Ready to start arrange tasks?</p>
                <h1>Shahabuddin’s Tasks</h1>
            </header>

            <div className={styles.noteSection}>
                <div className={styles.noteHeader}>
                    <p>Notes</p>
                    <div className={styles.tabs}>
                        <button className={styles.activeTab}>Recent</button>
                        <button className={styles.tab}>Highlighted</button>
                    </div>
                </div>

                <div className={styles.noteGrid}>
                    {tasks.map(task => (
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
