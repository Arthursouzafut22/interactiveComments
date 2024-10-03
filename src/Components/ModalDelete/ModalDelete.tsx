import styles from "./ModalDelete.module.scss";
import Button from "../Button/Button";
import { useContext } from "react";
import { ContextComments } from "../../Hooks/ContextCommnets";
import { useEffect } from "react";

type idProps = { id: string };

const ModalDelete = ({ id }: idProps) => {
  const context = useContext(ContextComments);

  if (!context) return null;
  const { activeModal, setActiveModal, removeComments } = context;

  useEffect(() => {
    const body = window.document.body;

    if (activeModal) {
      body.classList.add("disable-scroll");
    } else {
      body.classList.remove("disable-scroll");
    }

    return () => {
      body.classList.remove("disable-scroll");
    };
  }, [activeModal]);

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
