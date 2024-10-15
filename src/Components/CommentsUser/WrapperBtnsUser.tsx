import styles from "../NewsComments/NewsComments.module.scss";
import { memo } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { PiPencilSimpleFill } from "react-icons/pi";

type elementsCommnetsUsers = {
  id: number;
  idUser: number;
  activeEdit: boolean;
  editCommentsUsers: (id: number, idUser: number) => void;
  setActiveModalUsers: React.Dispatch<React.SetStateAction<boolean>>;
};

const WrapperBtnsUser = memo(
  ({
    id,
    activeEdit,
    editCommentsUsers,
    idUser,
    setActiveModalUsers,
  }: elementsCommnetsUsers) => {
    const isButtonEdit: React.CSSProperties = activeEdit
      ? { color: "#5457B6", opacity: "0.5", pointerEvents: "none" }
      : { color: "#5457B6" };

    return (
      <div className={styles.wrapperBtns}>
        <button
          style={{ color: "#ED6368" }}
          onClick={() => setActiveModalUsers(true)}
        >
          <RiDeleteBin7Fill />
          Delete
        </button>{" "}
        <button
          style={isButtonEdit}
          onClick={() => editCommentsUsers(id, idUser)}
        >
          <PiPencilSimpleFill />
          Edit
        </button>
      </div>
    );
  }
);

export default WrapperBtnsUser;
