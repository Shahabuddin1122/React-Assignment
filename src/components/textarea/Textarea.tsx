import React from "react";
import styles from "./Textarea.module.css";
import type {TextareaProps} from "../../types/props/textarea.d.ts";


const Textarea = ({ placeholder, value, onChange }: TextareaProps) => {
    return (
        <div className={styles.textareaWrapper}>
      <textarea
          className={`${styles.textarea} ${value ? styles.filled : ""}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
      />
            <label className={styles.label}>{placeholder}</label>
        </div>
    );
};

export default Textarea;
