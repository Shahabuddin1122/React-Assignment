import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/sidebar.tsx';
import styles from './LandingPage.module.css';
import Home from './home.tsx';
import Note from '../note/note.tsx';

const LandingPage = () => {
    const [selectedItem, setSelectedItem] = useState('home');

    const renderContent = () => {
        if (selectedItem === 'home') {
            return <Home />;
        } else if (selectedItem === 'notes') {
            return <Note />;
        } else {
            return <Home />;
        }
    };

    return (
        <div className={styles.main}>
            <Sidebar selectedItem={selectedItem} callbackFunction={setSelectedItem} />
            {renderContent()}
        </div>
    );
};

export default LandingPage;
