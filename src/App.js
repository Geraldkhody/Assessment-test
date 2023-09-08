import Download from "./Component/Download/Download";
import FileDirectory from "./Component/File Directory/FileDirectory";
import FilePreview from "./Component/File Preview/FilePreview";
import NavBar from "./Component/NavBar/NavBar";


function App() {
  return (
    <>
      {/* <FilePreview /> */}
      <NavBar />
      <main>
        <FileDirectory />
      </main>
      <Download />
    </>
  );
}

export default App;
