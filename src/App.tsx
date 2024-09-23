import "./App.scss";
import Wrapper from "./Components/Wrapper/Wrapper";
import StorageComments from "./Hooks/ContextCommnets";

function App() {
  return (
    <>
      <StorageComments>
        <Wrapper />
      </StorageComments>
    </>
  );
}

export default App;
