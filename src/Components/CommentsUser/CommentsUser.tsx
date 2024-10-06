import styles from "../NewsComments/NewsComments.module.scss";
import Controls from "../Comments/Controls";
import EditCommentsUsers from "./EditCommentsUsers";
import WrapperBtnsUser from "./WrapperBtnsUser";
import InfoUser from "./InfoUser";
// import ModalDelete from "../ModalDelete/ModalDelete";

type RespostaCommnets = {
  replies: [];
  activeEdit: boolean;
  comentario: string;
  editCommentsUsers: (comemtario: string) => void;
};

const CommentsUser = ({
  replies,
  comentario,
  activeEdit,
  editCommentsUsers,
}: RespostaCommnets) => {
  return (
    <>
      {replies &&
        replies.map(({ user, coment }) => (
          <div className={styles.cards}>
            <Controls />
            <div className={styles.caixa}>
              <div className={styles.wrapper}>
                <InfoUser />
                <WrapperBtnsUser
                  coment={comentario}
                  editCommentsUsers={editCommentsUsers}
                />
              </div>

              {activeEdit ? (
                <EditCommentsUsers coment={coment} key={coment} />
              ) : (
                <p>
                  <span style={{ fontWeight: "700", color: "#5457C6" }}>
                    @{user}
                  </span>{" "}
                  {coment}
                </p>
              )}
              {/* <ModalDelete id={""} />  */}
            </div>
          </div>
        ))}
    </>
  );
};

export default CommentsUser;
