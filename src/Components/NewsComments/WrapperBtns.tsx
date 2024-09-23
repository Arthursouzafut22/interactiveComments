import styles from "../NewsComments/NewsComments.module.scss";
import { memo } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { PiPencilSimpleFill } from "react-icons/pi";
import { useContext } from "react";
import { ContextComments } from "../../Hooks/ContextCommnets";

type propsInfo = {
  id: string;
  comentario: string;
};

const WrapperBtns: React.FC<propsInfo> = memo(({ id, comentario }) => {
  const context = useContext(ContextComments);

  if (!context) return;
  const { removeComments, editComments } = context;

  return (
    <div className={styles.wrapperBtns}>
      <button
        style={{ color: "#ED6368" }}
        onClick={(e) => removeComments(id, e)}
      >
        <RiDeleteBin7Fill />
        Delete
      </button>
      <button
        style={{ color: "#5457B6" }}
        onClick={(e) => editComments(comentario, id, e)}
      >
        <PiPencilSimpleFill />
        Edit
      </button>
    </div>
  );
});

export default WrapperBtns;
