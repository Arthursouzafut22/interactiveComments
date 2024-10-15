import styles from "../NewsComments/NewsComments.module.scss";
import Controls from "../Comments/Controls";
import EditCommentsUsers from "./EditCommentsUsers";
import WrapperBtnsUser from "./WrapperBtnsUser";
import InfoUser from "./InfoUser";
import { Reply } from "../../Hooks/RequestApi";
import ModalUsersDelete from "./ModalUsersDelete";

type RespostaCommnets = {
  id: number;
  replies: Reply[];
  activeEdit: boolean;
  newComment: string;
  score: number;
  editCommentsUsers: (id: number, idTeste: number) => void;
  updateCommentsUsers: (
    id: number,
    idComm: number,
    commentAtual: string,
    commentAvtual: string
  ) => void;
  removeCommentsUsers: (id: number, idUser: number) => void;
  activeModalUsers: boolean;
  setActiveModalUsers: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommentsUser = ({
  id,
  replies,
  newComment,
  score,
  editCommentsUsers,
  updateCommentsUsers,
  removeCommentsUsers,
  activeModalUsers,
  setActiveModalUsers,
}: RespostaCommnets) => {
  return (
    replies &&
    replies.map(({ idUser, user, coment, activeEdit }) => (
      <div className={styles.cards} key={coment}>
        <InfoUser />{" "}
        {activeEdit ? (
          <EditCommentsUsers
            id={id}
            idUser={idUser}
            coment={coment}
            newComment={newComment}
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
            </span>
            {""}
            {coment}
          </p>
        )}
        <div className={styles.caixaWrapper}>
          <Controls score={score} />
          <WrapperBtnsUser
            id={id}
            idUser={idUser}
            activeEdit={activeEdit}
            editCommentsUsers={editCommentsUsers}
            setActiveModalUsers={setActiveModalUsers}
          />
        </div>
        <ModalUsersDelete
          id={id}
          idUser={idUser}
          removeCommentsUsers={removeCommentsUsers}
          activeModalUsers={activeModalUsers}
          setActiveModalUsers={setActiveModalUsers}
        />
      </div>
    ))
  );
};

export default CommentsUser;
