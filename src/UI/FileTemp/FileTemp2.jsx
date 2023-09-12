import React, { useContext, useEffect, useState } from "react";
import PdfIcon from "../Icons/PdfIcon";
import FavIcon from "../Icons/FavIcon";
import XlsxIcon from "../Icons/XlsxIcon";
import NotFavIcon from "../Icons/NotFavIcon";
import PrintDownloadOverlap from "../PrintDownloadOverlap/PrintDownloadOverlap";
import ActiveFolder from "../../Store/ActiveFolder";
import ImageIcon from "../Icons/ImageIcon";

const FileTemp2 = ({ name, src, created_at }) => {
  const [isFav, setIsFav] = useState(false);
  const [isDocument, setIsDocument] = useState(false);
  const [isPdf, setIsPdf] = useState(true);
  const [isXlsx, setIsXlsx] = useState(false);

  const ctx = useContext(ActiveFolder);


  useEffect(() => {
    const fileExtension = name.split('.').pop().toLowerCase();

    if (fileExtension === "jpg" || fileExtension === "png") {
        setIsDocument(false);
        
    } else if (fileExtension === "pdf" || fileExtension === "xlsx") {
        setIsDocument(true);
        if (fileExtension === "pdf"){
          setIsPdf(true)
          setIsXlsx(false)
        }
        else{
          setIsPdf(false)
          setIsXlsx(true)
        }
    }
  }, [isDocument])

  const FilePreviewHandler = () => {
    ctx.filePreviewCall({ name, src, created_at, isDocument, isPdf, isXlsx })

  }

  const favHandler = () => {
    setIsFav(!isFav);
  };

  return (
    <div className="rounded-md bg-white p-2 shadow-md shadow-neutral-200" onDoubleClick={FilePreviewHandler}>
      {/* Image */}
      <div className="min-w-64 h-52 flex justify-center items-center bg-[#f2f5f7] rounded-sm relative">
        {/* Displaying image if it is not a document */}
        {!isDocument && (
          <img className="w-full h-full object-cover " src={src} alt="" />
        )}

        {/* if isDocument then display the document icon as an image */}
        {isDocument && isXlsx && <XlsxIcon width={80} height={81} />}

        {isDocument && isPdf && <PdfIcon width={80} height={81} />}

        {/* Icons overlapping on the image */}
        <div className=" left-0">
          {/* Favorite icon */}
          <div
            className="absolute top-2 right-2 w-9 h-9 rounded-full flex justify-center items-center bg-[rgba(0,0,0,0.28)] cursor-pointer "
            onClick={favHandler}
          >
            {isFav ? <FavIcon /> : <NotFavIcon />}
          </div>

        </div>
        {isDocument && <PrintDownloadOverlap src={src} name={name} />}

      </div>

      <div className="flex items-center py-2">
        <div className="w-8 h-8 rounded-full bg-[#f2f2f3] flex justify-center items-center mr-3">
          {/* File Icon */}
          {!isDocument && <ImageIcon />}

          {isDocument && isXlsx && <XlsxIcon width={19} height={20} />}

          {isDocument && isPdf && <PdfIcon width={19} height={20} />}
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-sm">{name}</div>
          <div className="text-xs text-[#6f7376]">{created_at}</div>
        </div>
      </div>
    </div>
  );
};

export default FileTemp2;
