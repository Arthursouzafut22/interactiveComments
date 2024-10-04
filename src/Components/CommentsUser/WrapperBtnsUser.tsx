import styles from "../NewsComments/NewsComments.module.scss";
import { memo } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { PiPencilSimpleFill } from "react-icons/pi";

const WrapperBtnsUser = memo(() => {
  // const isButtonEdit: React.CSSProperties = isEditing
  //   ? { color: "#5457B6", opacity: "0.5", pointerEvents: "none" }
  //   : { color: "#5457B6" };

  return (
    <div className={styles.wrapperBtns}>
      <button style={{ color: "#ED6368" }} onClick={() => "DELETE"}>
        <RiDeleteBin7Fill />
        Delete
      </button>{" "}
      <button style={{ color: "#5457B6" }} onClick={() => "EDIT"}>
        <PiPencilSimpleFill />
        Edit
      </button>
    </div>
  );
});

export default WrapperBtnsUser;
