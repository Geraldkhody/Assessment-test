import React, { useState } from "react";
import PdfIcon from "../../UI/Icons/PdfIcon";
import XlsxIcon from "../../UI/Icons/XlsxIcon";
import NotFavIcon from "../../UI/Icons/NotFavIcon";
import FavIcon from "../../UI/Icons/FavIcon";
import ImageIcon from "../../UI/Icons/ImageIcon";

const Main = ({ name, created_at, src, isPdf, isDocument, isXlsx }) => {
  const [isFav, setIsFav] = useState(false);

  const favHandler = () => {
    setIsFav(!isFav);
  };

  return (
    <div className="w-full h-[30rem] rounded-b-md bg-white px-6 py-5   ">
      {/* Container for image and file details */}
      <div className="w-full h-full flex flex-col">
        {/* Image */}
        <div className="w-full max-h-[25rem] flex justify-center items-center bg-[#f2f5f7] rounded-sm flex-grow relative">
          {/* Displaying image if it is not a document */}
          {!isDocument && (
            <img
              className="w-full h-full object-cover"
              src={src}
              alt=""
            />
          )}

          {/* if isDocument then display the document icon as an image */}
          {isDocument && isXlsx && <XlsxIcon width={80} height={81} />}

          {isDocument && isPdf && <PdfIcon width={80} height={81} />}

          {/* Icons overlapping on the image */}
          <div
            className="absolute top-2 right-2 w-9 h-9 rounded-full flex justify-center items-center bg-[rgba(0,0,0,0.28)] cursor-pointer "
            onClick={favHandler}
          >
            {!isFav && <NotFavIcon />}
            {isFav && <FavIcon />}
          </div>
          
        </div>

        {/* File details */}
        <div className="flex items-center py-2 mt-2">
          {/* File Icon */}
          <div className="w-8 h-8 rounded-full bg-[#f2f2f3] flex justify-center items-center mr-3">
            {/* File icon */}
            {!isDocument && <ImageIcon />}

            {isDocument && isXlsx && <XlsxIcon width={19} height={20} />}

            {isDocument && isPdf && <PdfIcon width={19} height={20} />}
          </div>

          {/* File Name and Date it was added */}
          <div className="flex flex-col">
            <div className="font-bold text-sm">{name}</div>
            <div className="text-xs text-[#6f7376]">{created_at}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
