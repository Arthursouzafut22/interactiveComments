import styles from "./CardsComments.module.scss";
import { FaShare } from "react-icons/fa6";
import RequestApi from "../../Hooks/RequestApi";
import Controls from "./Controls";

const CardsComments: React.FC = () => {
  const { resquest } = RequestApi();
  if (!resquest) return;
  const { comments } = resquest;

  return (
    <>
      {comments &&
        comments.map((item) => (
          <div key={item.id} className={styles.cards}>
            <Controls />

            <div className={styles.wrapperInfo}>
              <div className={styles.wrapperContent}>
                <div className={styles.info}>
                  <img src={item.img} alt={item.username} />
                  <p>{item.username}</p>
                  <p>{item.createdAt}</p>
                </div>
                <button>
                  <FaShare /> Reply
                </button>
              </div>
              <p className={styles.content}>{item.content}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardsComments;
