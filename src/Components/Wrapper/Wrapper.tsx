import styles from "./Wrapper.module.scss";
import CardsComments from "../Comments/CardsComments";
import AddComments from "../AddComments/AddComments";
import NewsComments from "../NewsComments/NewsComments";

const Wrapper: React.FC = () => {
  return (
    <main className={styles.main}>
      <CardsComments />
      <NewsComments />
      <AddComments />
    </main>
  );
};

export default Wrapper;
