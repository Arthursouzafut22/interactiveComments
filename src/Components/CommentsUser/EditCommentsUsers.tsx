import InputArea from "../FormArea/InputArea";
import Button from "../Button/Button";
import { useState } from "react";

interface EditCommentsProps {
  id: number;
  idUser: number;
  user: string;
  coment: string;
  newComment: string;
  updateCommentsUsers: (
    id: number,
    idComm: number,
    commentAtual: string,
    newComments: string
  ) => void;
}

const EditCommentsUsers: React.FC<EditCommentsProps> = ({
  id,
  idUser,
  coment,
  user,
  updateCommentsUsers,
}) => {
  const [newCommentsUsers, setNewCommentsUsers] = useState<string>(coment);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: "10px" }}>
        <InputArea
          name="edit"
          id="edit"
          placeholder={`@${user}`}
          value={newCommentsUsers}
          onChange={({ target }) => setNewCommentsUsers(target.value)}
        />
        <Button
          onClick={() =>
            updateCommentsUsers(id, idUser, coment, newCommentsUsers)
          }
        >
          UPDATE
        </Button>
      </form>
    </>
  );
};

export default EditCommentsUsers;
