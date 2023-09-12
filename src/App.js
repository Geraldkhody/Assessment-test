import { useState } from "react";
import Download from "./Component/Download/Download";
import FileDirectory from "./Component/File Directory/FileDirectory";
import FilePreview from "./Component/File Preview/FilePreview";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  const [filePreviewIsShown, setFilePreviewIsShown] = useState(false);
  const [items, setItems] = useState()

  const showFilePreviewIsShown = (items) => {
    setItems(items)
    setFilePreviewIsShown(true);
  };


  const hideFilePreviewIsShown = () => {
    setFilePreviewIsShown(false);
  };

  return (
    <>
      {filePreviewIsShown && (
        <FilePreview items={items}
          hideFilePreviewIsShown={hideFilePreviewIsShown}
        />
      )}
      <NavBar />
      <main>
        <FileDirectory showFilePreviewIsShown={showFilePreviewIsShown} />
      </main>
      <Download />
    </>
  );
}

export default App;
