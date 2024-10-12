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
  comentario: string;
  score: number;
  editCommentsUsers: (id: number) => void;
  updateCommentsUsers: (
    id: number,
    commentAvtual: string,
    newCommnets: string
  ) => void;
};

const CommentsUser = ({
  id,
  replies,
  activeEdit,
  comentario,
  score,
  editCommentsUsers,
  updateCommentsUsers,
}: RespostaCommnets) => {
  return (
    replies &&
    replies.map(({ user, coment }) => (
      <div className={styles.cards} key={coment}>
        <InfoUser />{" "}
        {activeEdit ? (
          <EditCommentsUsers
            id={id}
            coment={coment}
            comentario={comentario}
            user={user}
            updateCommentsUsers={updateCommentsUsers}
          />
        ) : (
          <p
            style={{
              display: "flex",
              justifyContent: "flex-start",
              margin: "10px 0px",
              gap: "0.50rem",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: "700",
                color: "#5457C6",
              }}
            >
              @{user}
            </span>{" "}
            {coment}
          </p>
        )}
        <div className={styles.caixaWrapper}>
          <Controls score={score} />
          <WrapperBtnsUser
            id={id}
            activeEdit={activeEdit}
            editCommentsUsers={editCommentsUsers}
          />
        </div>
      </div>
    ))
  );
};

export default CommentsUser;

{
  /* <ModalDelete /> id={} */
}
