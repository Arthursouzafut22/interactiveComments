import avatar from "../../assets/avatars/image-juliusomo.png";
import styles from "./AddComments.module.scss";
import InputArea from "../FormArea/InputArea";
import Button from "../Button/Button";
import { ContextComments } from "../../Hooks/ContextCommnets";
import { useContext } from "react";

const AddComments: React.FC = () => {
  const context = useContext(ContextComments);

  if (!context) return;
  const { comment, setComment, addComments } = context;

  return (
    <form className={styles.comment} onSubmit={addComments}>
      <img src={avatar} alt="username" />
      <InputArea
        name="textarea"
        id="comment"
        onChange={({ target }) => setComment(target.value)}
        value={comment}
        placeholder="Add a comment"
      />
      <Button>Send</Button>
    </form>
  );
};

export default AddComments;
