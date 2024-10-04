import avatar from "../../assets/avatars/image-juliusomo.png";
import styles from "../AddComments/AddComments.module.scss";
import InputArea from "../FormArea/InputArea";
import Button from "../Button/Button";
import { useState } from "react";

interface ReplyProps {
  username: string;
  comentario: string;
  postComments: (username: string, comentario: string) => void;
}

const ReplyComments = ({ username, comentario, postComments }: ReplyProps) => {
  const [commentUser, setCommentUser] = useState(comentario);

  return (
    <form className={styles.comment} onSubmit={(e) => e.preventDefault()}>
      <img src={avatar} alt="username" />
      <InputArea
        name="textarea"
        id="comment"
        onChange={({ target }) => setCommentUser(target.value)}
        value={commentUser}
        placeholder={`@${username}`}
      />
      <Button onClick={() => postComments(commentUser, username)}>Reply</Button>
    </form>
  );
};

export default ReplyComments;
