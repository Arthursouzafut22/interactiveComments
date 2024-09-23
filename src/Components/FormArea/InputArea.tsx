import { ChangeEvent } from "react";
import styles from "./InputArea.module.scss";

type areaProps = {
  name: string;
  id: string;
  value: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const InputArea: React.FC<areaProps> = ({
  name,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      className={styles.textarea}
      onChange={onChange}
    />
  );
};

export default InputArea;
