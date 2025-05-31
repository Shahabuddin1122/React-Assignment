import styles from "./input.module.css";
import type { InputProps } from "../../types/props/Input.d.ts";

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${styles.input} ${value ? styles.filled : ""}`}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      <label className={styles.label}>{placeholder}</label>
    </div>
  );
};

export default Input;
