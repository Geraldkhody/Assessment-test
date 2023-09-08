import React from 'react'
import DownloadIcon from '../Icons/DownloadIcon';
import PrintIcon from '../Icons/PrintIcon';

const PrintDownloadOverlap = ({src, name}) => {

  // const fileExtension = name.split('.').pop().toLowerCase();

  // if (fileExtension === "pdf" || fileExtension === "xlsx") {
  //   setIsDocument(false);
  // }
  

  const downloadFileHandler = () => {
    const fileUrl = src;

    // Create a hidden anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = name; // Set the desired file name

    // Trigger a click event on the anchor element
    document.body.appendChild(link);
    link.click();

    // Clean up the anchor element
    document.body.removeChild(link);

  }

  return (
    <div className="flex absolute bottom-2 left-2">
            {/* Download icon */}
            <div className="w-7 h-7 border border-[#dfe1e2] rounded-full flex justify-center items-center mr-1" onClick={downloadFileHandler}>
              <DownloadIcon />
            </div>
            {/* Print icon */}
            <div className="w-7 h-7 border border-[#dfe1e2] rounded-full flex justify-center items-center">
              <PrintIcon />
            </div>
          </div>
  )
}

export default PrintDownloadOverlap
