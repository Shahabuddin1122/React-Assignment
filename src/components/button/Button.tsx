import styles from "./Button.module.css";
import type { ButtonProps } from "../../types/props/ButtonProps";

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
