import React, {useState} from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState('home'); // default selected

    const navItems = [
        { key: 'home', label: 'Home', icon: '/assets/home.svg' },
        { key: 'notes', label: 'Notes', icon: '/assets/note.svg' },
        { key: 'files', label: 'Files', icon: '/assets/files.svg' },
        { key: 'tasks', label: 'Tasks', icon: '/assets/tasks.svg' },
    ];

    return (
        <div className={styles.sidebar}>
            {/* User Information Section */}
            <div className={styles.userSection}>
                <div className={styles.userLeft}>
                    <div className={styles.profilePicture}>
                        <img src={'/assets/profile.svg'} alt={'profile'}/>
                    </div>
                    <div className={styles.userInfo}>
                        <p className={styles.userName}>Shahabuddin Akhon</p>
                        <p className={styles.userEmail}>Shahabuddin54@gmail.com</p>
                    </div>
                </div>
                <img src={'/assets/bell.svg'} alt="notification" className={styles.notificationBell} />
            </div>

            {/* Search Section */}
            <div className={styles.searchSection}>
                <input type="text" placeholder="Search" className={styles.searchInput} />
                <img src={'/assets/search.svg'} alt="search" className={styles.searchIcon} />
            </div>

            {/* Action Button Section */}
            <div className={styles.noteButton}>
                <div className={styles.buttonLeft}>
                    <img src={'/assets/plus.svg'} alt="plus" className={styles.buttonIcon} />
                    <span>Note</span>
                </div>
                <div className={styles.buttonRight}>
                    <img src={'/assets/ellipsis.svg'} alt="ellipsis" className={styles.ellipsis}/>
                </div>
            </div>

            {/* Navigation Menu */}
            <div className={styles.navigationMenu}>
                <div className={styles.navigationMenu}>
                    {navItems.map((item) => (
                        <div
                            key={item.key}
                            className={`${styles.navItem} ${selectedItem === item.key ? styles.selected : ''}`}
                            onClick={() => setSelectedItem(item.key)}
                        >
                            <img src={item.icon} alt={item.label} className={styles.navIcon}/>
                            <span className={styles.navText}>{item.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
