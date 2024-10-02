import styles from "../NewsComments/NewsComments.module.scss";
import { memo } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { PiPencilSimpleFill } from "react-icons/pi";
import { useContext } from "react";
import { ContextComments } from "../../Hooks/ContextCommnets";

type propsInfo = {
  id: string;
  comentario: string;
  isEditing: boolean;
};

const WrapperBtns: React.FC<propsInfo> = memo(
  ({ id, comentario, isEditing }) => {
    const context = useContext(ContextComments);

    if (!context) return;
    const { removeComments, editComments } = context;

    const isButtonEdit: React.CSSProperties = isEditing
      ? { color: "#5457B6", opacity: "0.5", pointerEvents: "none" }
      : { color: "#5457B6" };

    return (
      <div className={styles.wrapperBtns}>
        <button
          style={{ color: "#ED6368" }}
          onClick={(e) => removeComments(id, e)}
        >
          <RiDeleteBin7Fill />
          Delete
        </button>{" "}
        <button
          style={{ ...isButtonEdit }}
          onClick={(e) => editComments(comentario, id, e)}
        >
          <PiPencilSimpleFill />
          Edit
        </button>
      </div>
    );
  }
);

export default WrapperBtns;
