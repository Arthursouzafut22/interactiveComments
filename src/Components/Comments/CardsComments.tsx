import styles from "./CardsComments.module.scss";
import { FaShare } from "react-icons/fa6";
import RequestApi from "../../Hooks/RequestApi";
import Controls from "./Controls";
import ReplyComments from "../ReplyComments/ReplyComments";
import CommentsUser from "../CommentsUser/CommentsUser";
import React, { useState } from "react";

const CardsComments: React.FC = () => {
  const { resquest, setResquest } = RequestApi();
  const [activeModalUsers, setActiveModalUsers] = useState(false);

  if (!resquest) return null;
  const { comments } = resquest;

  // Reply commnets Users....
  function postComments(comentarios: string, username: string) {
    if (comentarios.trim() === "") return;
    const newComments = {
      idUser: Math.floor(Math.random() * 200),
      user: username,
      coment: comentarios,
      activeEdit: false,
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

  // Edit Comments users...
  function editCommentsUsers(id: number, idTeste: number) {
    setResquest((prevCurrent) =>
      prevCurrent
        ? {
            ...prevCurrent,
            comments: prevCurrent.comments.map((item) =>
              item.id === id
                ? {
                    ...item,
                    replies: [...item.replies].map((item) =>
                      item.idUser === idTeste
                        ? { ...item, activeEdit: !item.activeEdit }
                        : item
                    ),
                  }
                : item
            ),
          }
        : null
    );
  }

  //Update comments users...
  function updateCommentsUsers(
    id: number,
    idComm: number,
    commentAtual: string,
    newComments: string
  ) {
    setResquest((prevUpdate) =>
      prevUpdate
        ? {
            ...prevUpdate,
            comments: prevUpdate.comments.map((item) =>
              item.id === id
                ? {
                    ...item,
                    replies: [...item.replies].map((item) =>
                      item.idUser === idComm
                        ? {
                            ...item,
                            activeEdit: !item.activeEdit,
                            coment: item.coment.replace(
                              commentAtual,
                              newComments
                            ),
                          }
                        : item
                    ),
                    activeEdit: !item.activeEdit,
                  }
                : item
            ),
          }
        : null
    );
  }

  // remove comments users...
  function removeCommentsUsers(id: number, idUser: number) {
    setResquest((prevRemov) =>
      prevRemov
        ? {
            ...prevRemov,
            comments: prevRemov.comments.map((item) =>
              item.id === id
                ? {
                    ...item,
                    replies: [...item.replies].filter(
                      (i) => i.idUser !== idUser
                    ),
                  }
                : item
            ),
          }
        : null
    );
    setActiveModalUsers(false);
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
            newComment,
            replies,
          }) => (
            <React.Fragment key={id}>
              <div className={styles.cards}>
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
                  id={id}
                  username={username}
                  postComments={postComments}
                />
              ) : null}
              <CommentsUser
                id={id}
                replies={replies}
                score={score}
                newComment={newComment}
                activeEdit={activeEdit}
                editCommentsUsers={editCommentsUsers}
                updateCommentsUsers={updateCommentsUsers}
                removeCommentsUsers={removeCommentsUsers}
                activeModalUsers={activeModalUsers}
                setActiveModalUsers={setActiveModalUsers}
              />
            </React.Fragment>
          )
        )}
    </>
  );
};

export default CardsComments;
