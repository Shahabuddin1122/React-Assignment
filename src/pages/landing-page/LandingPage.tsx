import React from 'react';
import Sidebar from '../../components/sidebar/sidebar.tsx';
import styles from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className={styles.main}>
            <Sidebar />
            {/* Other page content */}
        </div>
    );
};

export default LandingPage;