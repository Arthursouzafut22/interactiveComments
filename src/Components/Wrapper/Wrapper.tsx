import styles from "./Wrapper.module.scss";
import CardsComments from "../Comments/CardsComments";

const Wrapper: React.FC = () => {
  return <main className={styles.main}>
    <CardsComments/>
  </main>;
};

export default Wrapper;
