import FileDirectory from "./Component/File Directory/FileDirectory";
import NavBar from "./Component/NavBar/NavBar";
import Modal from "./UI/Modal.jsx/Modal";


function App() {
  return (
    <>
      <NavBar />
      <main>
        <FileDirectory />
      </main>
      <Modal />
    </>
  );
}

export default App;
