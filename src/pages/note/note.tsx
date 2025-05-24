import styles from './note.module.css';

const Note = () => {


    return (
        <div className={styles.content}>
            <header className={styles.header}>
                <p>Ready to start taking notes?</p>
                <h1>Shahabuddin’s Notes</h1>
            </header>


        </div>
    );
};

export default Note;
