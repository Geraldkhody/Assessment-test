import React from 'react'

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
            <div className="w-8 h-8 border border-[#dfe1e2] rounded-full flex justify-center items-center mr-1" onClick={downloadFileHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M4.08337 12.239C2.12558 12.09 0.583374 10.4543 0.583374 8.45832C0.583374 7.10009 1.29754 5.90863 2.37086 5.23902C2.66278 2.94232 4.62404 1.16666 7.00004 1.16666C9.37602 1.16666 11.3373 2.94232 11.6292 5.23902C12.7025 5.90863 13.4167 7.10009 13.4167 8.45832C13.4167 10.4543 11.8745 12.09 9.91671 12.239V12.25H4.08337V12.239ZM7.58337 6.99999V4.66666H6.41671V6.99999H4.66671L7.00004 9.91666L9.33337 6.99999H7.58337Z"
                  fill="#6E7377"
                />
              </svg>
            </div>
            {/* Print icon */}
            <div className="w-8 h-8 border border-[#dfe1e2] rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M4.08329 9.91666H9.91663V12.8333H4.08329V9.91666ZM11.0833 11.6667V8.74999H2.91663V11.6667H1.74996C1.4278 11.6667 1.16663 11.4055 1.16663 11.0833V5.24999C1.16663 4.92783 1.4278 4.66666 1.74996 4.66666H12.25C12.5721 4.66666 12.8333 4.92783 12.8333 5.24999V11.0833C12.8333 11.4055 12.5721 11.6667 12.25 11.6667H11.0833ZM2.91663 5.83332V6.99999H4.66663V5.83332H2.91663ZM4.08329 1.16666H9.91663C10.2388 1.16666 10.5 1.42783 10.5 1.74999V3.49999H3.49996V1.74999C3.49996 1.42783 3.76113 1.16666 4.08329 1.16666Z"
                  fill="#6E7377"
                />
              </svg>
            </div>
          </div>
  )
}

export default PrintDownloadOverlap
