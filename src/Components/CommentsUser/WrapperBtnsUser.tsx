import styles from "../NewsComments/NewsComments.module.scss";
import { memo } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { PiPencilSimpleFill } from "react-icons/pi";

type elementsCommnetsUsers = {
  id: number;
  activeEdit: boolean;
  editCommentsUsers: (id: number) => void;
};

const WrapperBtnsUser = memo(
  ({ id, activeEdit, editCommentsUsers }: elementsCommnetsUsers) => {
    const isButtonEdit: React.CSSProperties = activeEdit
      ? { color: "#5457B6", opacity: "0.5", pointerEvents: "none" }
      : { color: "#5457B6" };

    return (
      <div className={styles.wrapperBtns}>
        <button style={{ color: "#ED6368" }} onClick={() => "DELETE"}>
          <RiDeleteBin7Fill />
          Delete
        </button>{" "}
        <button style={isButtonEdit} onClick={() => editCommentsUsers(id)}>
          <PiPencilSimpleFill />
          Edit
        </button>
      </div>
    );
  }
);

export default WrapperBtnsUser;
