import InputArea from "../FormArea/InputArea";
import Button from "../Button/Button";
import { ContextComments } from "../../Hooks/ContextCommnets";
import { useContext, useState } from "react";

interface EditCommentsProps {
  comentario: string;
}

const EditComments: React.FC<EditCommentsProps> = ({ comentario }) => {
  const context = useContext(ContextComments);
  const [commentEdit, setCommentEdit] = useState<string>(comentario);

  if (!context) return;
  const { updateComments } = context;

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: "10px" }}>
        <InputArea
          name="edit"
          id="edit"
          value={commentEdit}
          onChange={({ target }) => setCommentEdit(target.value)}
        />
        <Button onClick={(e) => updateComments(commentEdit, comentario, e)}>
          UPDATE
        </Button>
      </form>
    </>
  );
};

export default EditComments;
