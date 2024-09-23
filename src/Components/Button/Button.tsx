import styles from "./Button.module.scss";
import { ReactNode, MouseEvent } from "react";

interface PropsButton {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<PropsButton> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
