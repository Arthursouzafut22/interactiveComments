import styles from "./ModalDelete.module.scss";
import Button from "../Button/Button";
import { useContext } from "react";
import { ContextComments } from "../../Hooks/ContextCommnets";
// import { useEffect } from "react";
// useEffect(() => {
//   document.body.classList.add("active-hidden")
// },[])

type idProps = { id: string };

const ModalDelete = ({ id }: idProps) => {
  const context = useContext(ContextComments);

  if (!context) return;
  const { activeModal, setActiveModal, removeComments } = context;

  return (
    <>
      {activeModal && (
        <div className={styles.wrapper}>
          <div className={styles.modal}>
            <h2>Excluir comentário?</h2>
            <p>
              Tem certeza de que deseja excluir este comentário? Isso removerá o
              comentário e não poderá ser desfeito.
            </p>
            <div className={styles.wrpBtns}>
              <Button onClick={(e) => removeComments(id, e)}>Sim</Button>
              <Button onClick={() => setActiveModal(false)}>Não</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDelete;
