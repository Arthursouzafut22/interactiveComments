import styles from "./CardsComments.module.scss";
import { FaShare } from "react-icons/fa6";
import RequestApi from "../../Hooks/RequestApi";
import Controls from "./Controls";
import ReplyComments from "../ReplyComments/ReplyComments";
import CommentsUser from "../CommentsUser/CommentsUser";

const CardsComments: React.FC = () => {
  const { resquest, setResquest } = RequestApi();

  if (!resquest) return null;
  const { comments } = resquest;

  // Reply commnets Users....
  function postComments(comentarios: string, username: string) {
    if (comentarios.trim() === "") return;
    const newComments = {
      user: username,
      coment: comentarios,
    };

    setResquest((prevUsers) =>
      prevUsers
        ? {
            ...prevUsers,
            comments: prevUsers.comments.map((item) =>
              item.username === username
                ? {
                    ...item,
                    currentUser: !item.currentUser,
                    replies: [...item.replies, newComments],
                  }
                : item
            ),
          }
        : null
    );
  }

  // Active Comments user...
  function activeUser(id: number) {
    setResquest((prevComments) =>
      prevComments
        ? {
            ...prevComments,
            comments: prevComments.comments.map((comment) =>
              comment.id === id
                ? { ...comment, currentUser: !comment.currentUser }
                : comment
            ),
          }
        : null
    );
  }

  // Edit commente users...
  function editCommentsUsers(id: number) {
    setResquest((prevCurrent) =>
      prevCurrent
        ? {
            ...prevCurrent,
            comments: prevCurrent.comments.map((item) =>
              item.id === id ? { ...item, activeEdit: !item.activeEdit } : item
            ),
          }
        : null
    );
  }

  //Update comments users...
  function updateCommentsUsers(
    id: number,
    commentAvtual: string,
    newCommnets: string
  ) {
    setResquest((prevUpdate) =>
      prevUpdate
        ? {
            ...prevUpdate,
            comments: prevUpdate.comments.map((item) =>
              item.id === id
                ? {
                    ...item,
                    comentario: item.comentario.replace(
                      commentAvtual,
                      newCommnets
                    ),
                    activeEdit: !item.activeEdit,
                  }
                : item
            ),
          }
        : null
    );
  }

  return (
    <>
      {comments &&
        comments.map(
          ({
            id,
            img,
            username,
            score,
            createdAt,
            content,
            currentUser,
            activeEdit,
            comentario,
            replies,
          }) => (
            <>
              <div key={id} className={styles.cards}>
                <div className={styles.info}>
                  <img src={img} alt={username} />
                  <p>{username}</p>
                  <p>{createdAt}</p>
                </div>
                <p className={styles.content}>{content}</p>
                <div className={styles.wrapperInfo}>
                  <Controls score={score} />
                  <button onClick={() => activeUser(id)}>
                    <FaShare /> Reply
                  </button>
                </div>
              </div>

              {currentUser ? (
                <ReplyComments
                  username={username}
                  comentario={comentario}
                  postComments={postComments}
                />
              ) : (
                ""
              )}
              <CommentsUser
                id={id}
                replies={replies}
                score={score}
                comentario={comentario}
                activeEdit={activeEdit}
                editCommentsUsers={editCommentsUsers}
                updateCommentsUsers={updateCommentsUsers}
              />
            </>
          )
        )}
    </>
  );
};

export default CardsComments;
