import styles from "./CardsComments.module.scss";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Input from "../Input/Input";

const Controls: React.FC = () => {
  return (
    <div className={styles.control}>
      <FaPlus style={{ color: " #5457B6",cursor:"pointer" }} />
      <Input type="number" name="number" id="number" value="10" />
      <FaMinus style={{ color: " #5457B6",cursor:"pointer" }} />
    </div>
  );
};

export default Controls;
