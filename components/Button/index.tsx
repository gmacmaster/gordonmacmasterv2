import styles from "../../styles/Button.module.css";

interface IButtonProps {
  children: any;
  style?: any;
}

export default function Button({ children, style = {} }: IButtonProps) {
  return (
    <button className={styles.button} style={style}>
      {children}
    </button>
  );
}
