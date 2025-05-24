import styles from "./Button.module.css";
import type { buttonProps } from "../../types/props/buttonProps";

const Button = ({ text, onClick }: buttonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
