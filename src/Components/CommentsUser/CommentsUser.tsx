import styles from "../NewsComments/NewsComments.module.scss";
import Controls from "../Comments/Controls";
import EditCommentsUsers from "./EditCommentsUsers";
import WrapperBtnsUser from "./WrapperBtnsUser";
import InfoUser from "./InfoUser";
import { Reply } from "../../Hooks/RequestApi";
// import ModalDelete from "../ModalDelete/ModalDelete";

type RespostaCommnets = {
  id: number;
  replies: Reply[];
  activeEdit: boolean;
  score: number;
  editCommentsUsers: (id: number) => void;
};

const CommentsUser = ({
  id,
  replies,
  activeEdit,
  score,
  editCommentsUsers,
}: RespostaCommnets) => {
  return (
    <>
      {replies &&
        replies.map(({ user, coment }) => (
          <div className={styles.cards} key={coment}>
            <Controls score={score} />
            <div className={styles.caixa}>
              <div className={styles.wrapper}>
                <InfoUser />
                <WrapperBtnsUser
                  id={id}
                  activeEdit={activeEdit}
                  editCommentsUsers={editCommentsUsers}
                />
              </div>

              {activeEdit ? (
                <EditCommentsUsers coment={coment} user={user} />
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
