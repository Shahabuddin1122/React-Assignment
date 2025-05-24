import React from 'react';
import styles from './Modal.module.css';

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.close} onClick={onClose}>✖</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
