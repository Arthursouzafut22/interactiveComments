import styles from "./NewsComments.module.scss";
// import img from "../../assets/avatars/image-juliusomo.png";
import Controls from "../Comments/Controls";
import EditComments from "../EditComments/EditComments";
import { ContextComments } from "../../Hooks/ContextCommnets";
import { useContext } from "react";
import WrapperBtns from "./WrapperBtns";
import Info from "./Info";

const NewsComments: React.FC = () => {
  const context = useContext(ContextComments);

  if (!context) return;
  const { newComments, respostaa } = context;

  return (
    newComments &&
    newComments.map(({ id, username, comentario }) => (
      <div className={styles.cards} key={id}>
        <Controls />
        <div className={styles.caixa}>
          <div className={styles.wrapper}>
            <Info username={username} />
            <WrapperBtns id={id} comentario={comentario} />
          </div>
          {respostaa.length > 0 ? (
            <EditComments comentario={comentario} />
          ) : (
            <p className={styles.comments}>{comentario}</p>
          )}
          ...
        </div>
      </div>
    ))
  );
};

export default NewsComments;
