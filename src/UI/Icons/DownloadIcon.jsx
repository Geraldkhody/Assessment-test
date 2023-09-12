import React from "react";

const DownloadIcon = ({src, name}) => {
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

//   const downloadFileHandler = () => {
//   // Replace 'your_file_url' with the actual URL of the file you want to download.
//     const fileUrl = src;

//   fetch(fileUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const contentLength = response.headers.get('content-length');
//       let downloaded = 0;

//       const progressCallback = (event) => {
//         if (contentLength) {
//           downloaded = (event.loaded / contentLength) * 100;
//           setDownloadProgress(downloaded);
//         }
//       };

//       // Attach the progress callback to track the download progress
//       response.body.getReader().read().then(function process({ done }) {
//         if (done) {
//           // Download completed
//           setDownloadProgress(100);
//         } else {
//           // Continue downloading
//           response.body.getReader().read().then(process);
//         }
//       });
//     })
//     .catch((error) => {
//       console.error('Download error:', error);
//       // Handle the error as needed
//     });
// };



  return (
    <div className="w-7 h-7 border border-[#dfe1e2] rounded-full flex justify-center items-center mr-1" onClick={downloadFileHandler}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M4.08337 12.239C2.12558 12.09 0.583374 10.4543 0.583374 8.45832C0.583374 7.10009 1.29754 5.90863 2.37086 5.23902C2.66278 2.94232 4.62404 1.16666 7.00004 1.16666C9.37602 1.16666 11.3373 2.94232 11.6292 5.23902C12.7025 5.90863 13.4167 7.10009 13.4167 8.45832C13.4167 10.4543 11.8745 12.09 9.91671 12.239V12.25H4.08337V12.239ZM7.58337 6.99999V4.66666H6.41671V6.99999H4.66671L7.00004 9.91666L9.33337 6.99999H7.58337Z"
        fill="#6E7377"
      />
    </svg>
    </div>
    
  );
};

export default DownloadIcon;
