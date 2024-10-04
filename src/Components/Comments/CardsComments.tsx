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
      coment: comentarios,
      user: username,
    };

    setResquest((prevUsers) =>
      prevUsers
        ? {
            ...prevUsers,
            comments: prevUsers.comments.map((item) =>
              item.username === username
                ? { ...item, replies: [...item.replies, newComments] }
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

  return (
    <>
      {comments &&
        comments.map(
          ({
            id,
            img,
            username,
            createdAt,
            content,
            currentUser,
            comentario,
            replies,
          }) => (
            <>
              <div key={id} className={styles.cards}>
                <Controls />
                <div className={styles.wrapperInfo}>
                  <div className={styles.wrapperContent}>
                    <div className={styles.info}>
                      <img src={img} alt={username} />
                      <p>{username}</p>
                      <p>{createdAt}</p>
                    </div>
                    <button onClick={() => activeUser(id)}>
                      <FaShare /> Reply
                    </button>
                  </div>
                  <p className={styles.content}>{content}</p>
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
              <CommentsUser replies={replies} />
            </>
          )
        )}
    </>
  );
};

export default CardsComments;
