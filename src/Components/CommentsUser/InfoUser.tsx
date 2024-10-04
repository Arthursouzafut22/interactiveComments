import styles from "../NewsComments/NewsComments.module.scss";
import img from "../../assets/avatars/image-juliusomo.png";

const InfoUser = () => {
  return (
    <div className={styles.info}>
      <img src={img} alt={"Juliusomo"} />
      <p>{"Juliusomo"}</p>
      <p>you</p>
      <p>7 hrs ago</p>
    </div>
  );
};

export default InfoUser;
