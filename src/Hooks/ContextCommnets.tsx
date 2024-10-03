import {
  createContext,
  ReactNode,
  useState,
  FormEvent,
  MouseEvent,
} from "react";

interface ContextInte {
  activeModal:boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  newComments: Commetarios[];
  comment: string;
  setNewComments: React.Dispatch<React.SetStateAction<Commetarios[]>>;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  addComments: (event: FormEvent<HTMLFormElement>) => void;
  removeComments: (id: string, event: MouseEvent<HTMLButtonElement>) => void;
  editComments: (
    comentario: string,
    id: string,
    event: MouseEvent<HTMLButtonElement>
  ) => void;
  updateComments: (
    commentEdit: string,
    comentario: string,
    event: MouseEvent<HTMLButtonElement>
  ) => void;
}

export const ContextComments = createContext<ContextInte | undefined>(
  undefined
);

interface ChildrenProps {
  children: ReactNode;
}

interface Resposta {
  id: string;
  commnetEdit: string;
  comentario: string;
}

interface Commetarios {
  id: string;
  username: string;
  comentario: string;
  resposta: Resposta[];
  isEditing: boolean;
}

const StorageComments = ({ children }: ChildrenProps) => {
  const [comment, setComment] = useState<string>("");
  const [newComments, setNewComments] = useState<Commetarios[]>([]);
  const [activeModal, setActiveModal] = useState<boolean>(false);

  // Adicionar comments....
  function addComments(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (comment.trim() === "") return;

    const novoCommet = {
      id: String(Math.floor(Math.random() * 100) + 5),
      username: "juliusomo",
      comentario: comment,
      resposta: [],
      isEditing: false,
    };

    localStorage.setItem("comment", JSON.stringify(novoCommet));
    setNewComments(() => [...newComments, novoCommet]);
    setComment("");
  }

  // Remove comments....
  function removeComments(
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    setActiveModal(false);
    setNewComments(newComments.filter((item) => item.id !== id));
  }

  // Editar comments....
  function editComments(
    comentario: string,
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();

    setNewComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? { ...comment, isEditing: !comment.isEditing }
          : comment
      )
    );
  }

  //Update comments....
  function updateComments(
    commentEdit: string,
    comentario: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();

    setNewComments((prevComments) =>
      prevComments.map((item) =>
        item.comentario === comentario
          ? {
              ...item,
              comentario: item.comentario.replace(comentario, commentEdit),
              isEditing: !item.isEditing,
            }
          : item
      )
    );
  }

  return (
    <ContextComments.Provider
      value={{
        setNewComments,
        newComments,
        comment,
        setComment,
        addComments,
        removeComments,
        editComments,
        updateComments,
        activeModal,
        setActiveModal
      }}
    >
      {children}
    </ContextComments.Provider>
  );
};

export default StorageComments;
