import InputArea from "../FormArea/InputArea";
import Button from "../Button/Button";
import { useState } from "react";

interface EditCommentsProps {
  user: string;
  coment: string;
}

const EditCommentsUsers: React.FC<EditCommentsProps> = ({ coment, user }) => {
  const [commentEdit, setCommentEdit] = useState<string>(coment);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <InputArea
          name="edit"
          id="edit"
          placeholder={`@${user}`}
          value={commentEdit}
          onChange={({ target }) => setCommentEdit(target.value)}
        />
        <Button onClick={() => console.log(true)}>UPDATE</Button>
      </form>
    </>
  );
};

export default EditCommentsUsers;
