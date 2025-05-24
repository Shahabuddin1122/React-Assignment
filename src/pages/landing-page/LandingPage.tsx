import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/sidebar.tsx';
import styles from './LandingPage.module.css';
import Home from './home.tsx';
import Note from '../note/note.tsx';
import Task from '../task/task.tsx';
import type { Task as TaskType } from '../../types/task-item/task.ts';
import Modal from '../../components/modal/add-modal.tsx';
import Button from '../../components/button/Button.tsx';
import Input from '../../components/input/Input.tsx';
import Textarea from '../../components/textarea/Textarea.tsx';
import tasksData from '../../models/task-items/tasks.json';

const LandingPage = () => {
    const [selectedItem, setSelectedItem] = useState('home');
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState<TaskType[]>(tasksData);

    const [newTask, setNewTask] = useState<TaskType>({
        id: 0,
        title: '',
        description: '',
        time: '',
        state: 'Pending',
        favourite: false,
    });

    const renderContent = () => {
        switch (selectedItem) {
            case 'home':
                return <Home />;
            case 'notes':
                return <Note />;
            case 'tasks':
                return <Task tasks={tasks} setTasks={setTasks} />;
            default:
                return <Home />;
        }
    };

    const handleAddTask = () => {
        if (!newTask.title.trim()) return;

        const task: TaskType = {
            ...newTask,
            id: Date.now(),
            time: new Date().toISOString(),
        };

        setTasks(prev => [...prev, task]);
        setShowModal(false);

        setNewTask({
            id: 0,
            title: '',
            description: '',
            time: '',
            state: 'Pending',
            favourite: false,
        });
    };

    return (
        <div className={styles.main}>
            <Sidebar
                selectedItem={selectedItem}
                callbackFunction={setSelectedItem}
                onAddClick={() => setShowModal(true)}
            />

            {renderContent()}

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h2>Add Task</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Input
                            type="text"
                            placeholder="Task Title"
                            value={newTask.title}
                            onChange={val => setNewTask({ ...newTask, title: val })}
                        />
                        <Textarea
                            placeholder="Task Description"
                            value={newTask.description}
                            onChange={val => setNewTask({ ...newTask, description: val })}
                        />
                    </div>
                    <Button text="Add" onClick={handleAddTask} />
                </Modal>
            )}
        </div>
    );
};

export default LandingPage;
