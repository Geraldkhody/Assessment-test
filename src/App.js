import Download from "./Component/Download/Download";
import FileDirectory from "./Component/File Directory/FileDirectory";
import NavBar from "./Component/NavBar/NavBar";
// import Modal from "./UI/Modal.jsx/Modaal";


function App() {
  return (
    <>
      <NavBar />
      <main>
        <FileDirectory />
      </main>
      {/* <Modal /> */}
      <Download />
    </>
  );
}

export default App;
