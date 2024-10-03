import styles from "./NewsComments.module.scss";
import Controls from "../Comments/Controls";
import EditComments from "../EditComments/EditComments";
import { ContextComments } from "../../Hooks/ContextCommnets";
import { useContext } from "react";
import WrapperBtns from "./WrapperBtns";
import Info from "./Info";
import ModalDelete from "../ModalDelete/ModalDelete";

const NewsComments: React.FC = () => {
  const context = useContext(ContextComments);

  if (!context) return;
  const { newComments } = context;

  return (
    newComments &&
    newComments.map(({ id, username, comentario, isEditing }) => (
      <div className={styles.cards} key={id}>
        <Controls />
        <div className={styles.caixa}>
          <div className={styles.wrapper}>
            <Info username={username} />
            <WrapperBtns
              id={id}
              comentario={comentario}
              isEditing={isEditing}
            />
          </div>

          {isEditing ? (
            <EditComments comentario={comentario} key={id} />
          ) : (
            <p className={styles.comments}>{comentario}</p>
          )}
          <ModalDelete id={id} />
        </div>
      </div>
    ))
  );
};

export default NewsComments;
