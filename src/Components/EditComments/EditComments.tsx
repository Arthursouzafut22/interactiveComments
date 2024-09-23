import InputArea from "../FormArea/InputArea";
import Button from "../Button/Button";

interface EditCommentsProps {
  comentario: string;
}

const EditComments: React.FC<EditCommentsProps> = ({ comentario }) => {
  return (
    <>
      <InputArea name="edit" id="edit" value={comentario} />
      <Button>UPDATE</Button>
    </>
  );
};

export default EditComments;
