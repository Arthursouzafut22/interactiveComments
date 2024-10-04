import styles from "./Wrapper.module.scss";
import CardsComments from "../Comments/CardsComments";
import AddComments from "../AddComments/AddComments";
import NewsComments from "../NewsComments/NewsComments";
import CommentsUser from "../CommentsUser/CommentsUser";
const Wrapper: React.FC = () => {
  return (
    <main className={styles.main}>
      <CardsComments />
      <NewsComments />
      <AddComments />
      <CommentsUser/>
    </main>
  );
};

export default Wrapper;
