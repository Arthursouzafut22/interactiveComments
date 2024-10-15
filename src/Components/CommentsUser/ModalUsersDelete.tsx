import styles from "../ModalDelete/ModalDelete.module.scss";
import Button from "../Button/Button";
import { useEffect } from "react";

type ModalProps = {
  id: number;
  idUser: number;
  removeCommentsUsers: (id: number, idUser: number) => void;
  activeModalUsers: boolean;
  setActiveModalUsers: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalUsersDelete = ({
  id,
  idUser,
  removeCommentsUsers,
  activeModalUsers,
  setActiveModalUsers,
}: ModalProps) => {
  useEffect(() => {
    const body = window.document.body;

    if (activeModalUsers) {
      body.classList.add("disable-scroll");
    } else {
      body.classList.remove("disable-scroll");
    }

    return () => {
      body.classList.remove("disable-scroll");
    };
  }, [activeModalUsers]);

  return (
    <>
      {activeModalUsers && (
        <div className={styles.wrapper}>
          <div className={styles.modal}>
            <h2>Excluir comentário?</h2>
            <p>
              Tem certeza de que deseja excluir este comentário? Isso removerá o
              comentário e não poderá ser desfeito.
            </p>
            <div className={styles.wrpBtns}>
              <Button onClick={() => removeCommentsUsers(id, idUser)}>
                Sim
              </Button>
              <Button onClick={() => setActiveModalUsers(false)}>Não</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalUsersDelete;
