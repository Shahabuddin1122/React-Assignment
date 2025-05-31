import React from "react";
import styles from "./modal.module.css";
import type {ModalProps} from "../../types/props/ModalProps";

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
