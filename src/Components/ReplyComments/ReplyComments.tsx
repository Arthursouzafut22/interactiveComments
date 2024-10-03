import avatar from "../../assets/avatars/image-juliusomo.png";
import styles from "../AddComments/AddComments.module.scss";
import InputArea from "../FormArea/InputArea";
import Button from "../Button/Button";

interface ReplyProps {
  username: string;
}

const ReplyComments = ({ username }: ReplyProps) => {
  return (
    <form className={styles.comment}>
      <img src={avatar} alt="username" />
      <InputArea
        name="textarea"
        id="comment"
        onChange={() => console.log(true)}
        value={""}
        placeholder={`@${username}`}
      />
      <Button>Reply</Button>
    </form>
  );
};

export default ReplyComments;
