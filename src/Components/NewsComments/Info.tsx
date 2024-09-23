import styles from "./NewsComments.module.scss";
import img from "../../assets/avatars/image-juliusomo.png";

interface User {
  username: string;
}

const Info = ({ username }: User) => {
  return (
    <div className={styles.info}>
      <img src={img} alt={username} />
      <p>{username}</p>
      <p>you</p>
      <p>7 hrs ago</p>
    </div>
  );
};

export default Info;
