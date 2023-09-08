import React, { useState } from "react";
// import Modal from "../Moodal/Modal";
import Header from "./Header";
import Main from "./Main";
import Modal from "../../UI/Moodal/Modal";

const FilePreview = ({ name, created_at }) => {
  

  return (
    <Modal>
    <div className="border w-[45rem] mt-10 rounded-md bg-white">
      <Header />
      
      <Main name={name} created_at={created_at} />
    </div>
    </Modal>
  );
};



export default FilePreview
