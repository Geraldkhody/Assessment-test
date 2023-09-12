import React from "react";
// import Modal from "../Moodal/Modal";
import Header from "./Header";
import Main from "./Main";
import Modal from "../../UI/Moodal/Modal";

const FilePreview = ({ hideFilePreviewIsShown, items }) => {
  

  return (
    <Modal>
    <div className="border w-[45rem] mt-10 rounded-md bg-white">
      <Header hideFilePreviewIsShown={hideFilePreviewIsShown} />
      
      <Main name={items.name} created_at={items.created_at} src={items.src} isDocument={items.isDocument} isPdf={items.isPdf} isXlsx={items.isXlsx} />
    </div>
    </Modal>
  );
};



export default FilePreview
