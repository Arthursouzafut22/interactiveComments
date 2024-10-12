import InputArea from "../FormArea/InputArea";
import Button from "../Button/Button";
import { useState } from "react";

interface EditCommentsProps {
  id: number;
  user: string;
  coment: string;
  comentario: string;
  updateCommentsUsers: (
    id: number,
    commentAvtual: string,
    newCommnets: string
  ) => void;
}

const EditCommentsUsers: React.FC<EditCommentsProps> = ({
  id,
  coment,
  comentario,
  user,
  updateCommentsUsers,
}) => {
  const [commentEdit, setCommentEdit] = useState<string>(coment);
  console.log(commentEdit);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: "10px" }}>
        <InputArea
          name="edit"
          id="edit"
          placeholder={`@${user}`}
          value={commentEdit}
          onChange={({ target }) => setCommentEdit(target.value)}
        />
        <Button
          onClick={() => updateCommentsUsers(id, comentario, commentEdit)}
        >
          UPDATE
        </Button>
      </form>
    </>
  );
};

export default EditCommentsUsers;
