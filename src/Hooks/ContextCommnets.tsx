import {
  createContext,
  ReactNode,
  useState,
  FormEvent,
  MouseEvent,
} from "react";

interface ContextInte {
  newComments: Commetarios[];
  respostaa: Resposta[];
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  addComments: (event: FormEvent<HTMLFormElement>) => void;
  removeComments: (id: string, event: MouseEvent<HTMLButtonElement>) => void;
  editComments: (
    comentario: string,
    id: string,
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
  respostaTeste: string;
  comentario: string;
 
}

interface Commetarios {
  id: string;
  username: string;
  comentario: string;
  resposta: Resposta[];
}

const StorageComments = ({ children }: ChildrenProps) => {
  const [comment, setComment] = useState<string>("");
  const [respostaa, setResposta] = useState<Resposta[]>([]);
  const [newComments, setNewComments] = useState<Commetarios[]>([]);

   // Adicionar comments....

  function addComments(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (comment.trim() === "") return;

    const novoCommet = {
      id: String(Math.floor(Math.random() * 100) + 5),
      username: "juliusomo",
      comentario: comment,
      resposta: [],
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

    setNewComments(newComments.filter((item) => item.id !== id));
  }
  
  // Editar comments....

  function editComments(
    comentario: string,
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();

    const newResposta = {
      id: id,
      respostaTeste: comentario,
      comentario: comentario, 
    };

    if (newResposta.id === id) {
      setResposta(() => [...respostaa, newResposta]);
    }

   
  }

  return (
    <ContextComments.Provider
      value={{
        newComments,
        comment,
        setComment,
        addComments,
        removeComments,
        editComments,
        respostaa,
      }}
    >
      {children}
    </ContextComments.Provider>
  );
};

export default StorageComments;
