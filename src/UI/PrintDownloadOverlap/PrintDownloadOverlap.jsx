import React from 'react'
import DownloadIcon from '../Icons/DownloadIcon';
import PrintIcon from '../Icons/PrintIcon';

const PrintDownloadOverlap = ({ src, name }) => {

  // const fileExtension = name.split('.').pop().toLowerCase();

  // if (fileExtension === "pdf" || fileExtension === "xlsx") {
  //   setIsDocument(false);
  // }




  return (
    <div className="flex absolute bottom-2 left-2">
      {/* Download icon */}
      <DownloadIcon src={src} name={name} />

      {/* Print icon */}
      <PrintIcon />
    </div>
  )
}

export default PrintDownloadOverlap
