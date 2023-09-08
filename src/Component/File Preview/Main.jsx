import React, { useState } from "react";
import PdfIcon from "../../UI/Icons/PdfIcon";
import PrintDownloadOverlap from "../../UI/PrintDownloadOverlap/PrintDownloadOverlap";
import XlsxIcon from "../../UI/Icons/XlsxIcon";
import NotFavIcon from "../../UI/Icons/NotFavIcon";
import FavIcon from "../../UI/Icons/FavIcon";

const Main = ({ name, created_at }) => {
  const [isFav, setIsFav] = useState(false);
  const [isDocument, setIsDocument] = useState(true);

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
              src="image/aaa.jpg"
              alt=""
            />
          )}

          {/* if isDocument then display the document icon as an image */}
          {isDocument && <PdfIcon width={81} height={82} />}

          {/* Icons overlapping on the image */}
          <div
            className="absolute top-2 right-2 w-9 h-9 rounded-full flex justify-center items-center bg-[rgba(0,0,0,0.28)] cursor-pointer "
            onClick={favHandler}
          >
            {!isFav && <NotFavIcon />}
            {isFav && <FavIcon />}
          </div>

          {/* Displaying Download and Print icon if it is a document  */}
          {isDocument && <PrintDownloadOverlap />}
        </div>

        {/* File details */}
        <div className="flex items-center py-2 mt-2">
          {/* File Icon */}
          <div className="w-8 h-8 rounded-full bg-[#f2f2f3] flex justify-center items-center mr-3">
            {/* File icon */}
            <XlsxIcon height={20} width={19} />
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
