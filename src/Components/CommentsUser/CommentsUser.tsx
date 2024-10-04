import styles from "../NewsComments/NewsComments.module.scss";
import Controls from "../Comments/Controls";
// import EditComments from "../EditComments/EditComments";
import WrapperBtnsUser from "./WrapperBtnsUser";
import InfoUser from "./InfoUser";
// import ModalDelete from "../ModalDelete/ModalDelete";

type RespostaCommnets = {
  replies: [];
};

const CommentsUser = ({ replies }: RespostaCommnets) => {
  return (
    <>
      {replies &&
        replies.map(({ user, coment }) => (
          <div className={styles.cards}>
            <Controls />
            <div className={styles.caixa}>
              <div className={styles.wrapper}>
                <InfoUser />
                <WrapperBtnsUser />
              </div>
              {/* 
        {"true" ? (
          <EditComments comentario={""} key={""} />
          ) : (
              <p className={styles.comments}>{""}</p>
              )}
              <ModalDelete id={""} /> */}
              <p>
                <span style={{ fontWeight: "700", color: "#5457C6" }}>
                  @{user}
                </span>{" "}
                {coment}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default CommentsUser;
