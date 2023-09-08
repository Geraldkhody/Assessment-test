import React, { useState } from "react";
// import Modal from "../Moodal/Modal";
import Header from "./Header";
import Main from "./Main";
import Modal from "../../UI/Moodal/Modal";

const FilePreview = ({ name, created_at, hideFilePreviewIsShown }) => {
  

  return (
    <Modal>
    <div className="border w-[45rem] mt-10 rounded-md bg-white">
      <Header hideFilePreviewIsShown={hideFilePreviewIsShown} />
      
      <Main name={name} created_at={created_at} />
    </div>
    </Modal>
  );
};



export default FilePreview
