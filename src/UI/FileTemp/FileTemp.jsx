// import React, { useState } from "react";
// import PrintDownloadOverlap from "../PrintDownloadOverlap/PrintDownloadOverlap";

// const FileTemp = ({ name, created_at, src }) => {
//   const [isFav, setIsFav] = useState(false);
//   const [isDocument, setIsDocument] = useState(false);
//   const [isXlsx, setIsXlsx] = useState(false);
//   const [isPdf, setIsPdf] = useState(false);

//   const fileExtension = name.split('.').pop().toLowerCase();

//   if (fileExtension === "jpg" || fileExtension === "png") {
//     setIsDocument(false)
//   } else {
//      if (fileExtension === "pdf") {
//       setIsDocument(true)
//       setIsPdf(true)
//       setIsXlsx(false)
//     } 
//     else {
//       setIsDocument(true)
//       setIsPdf(false)
//       setIsXlsx(true)
//     }
//   }



//   const favHandler = () => {
//     setIsFav(!isFav);
//   };

//   const notFavIcon = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="17"
//       height="17"
//       viewBox="0 0 17 17"
//       fill="none"
//     >
//       <path
//         d="M8.50079 3.20771C10.1647 1.71417 12.7359 1.76375 14.3386 3.3698C15.9413 4.97584 15.9964 7.53454 14.5058 9.20338L8.50001 15.2185L2.49439 9.20338C1.00382 7.53454 1.05954 4.9718 2.66154 3.3698C4.26536 1.76598 6.83209 1.71195 8.50079 3.20771ZM13.3359 4.37049C12.274 3.30646 10.5596 3.2633 9.44712 4.26195L8.50143 5.1108L7.55523 4.26262C6.43952 3.26256 4.72825 3.30656 3.66328 4.37153C2.60804 5.42676 2.55507 7.11684 3.52753 8.2331L8.50001 13.2135L13.4727 8.2331C14.4455 7.11641 14.3927 5.42955 13.3359 4.37049Z"
//         fill="white"
//       />
//     </svg>
//   );

//   const favIcon = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="17"
//       height="17"
//       viewBox="0 0 17 17"
//       fill="none"
//     >
//       <path
//         d="M8.5007 3.20771C10.1646 1.71417 12.7358 1.76375 14.3385 3.3698C15.9412 4.97584 15.9963 7.53454 14.5057 9.20338L8.49992 15.2185L2.4943 9.20338C1.00373 7.53454 1.05945 4.9718 2.66145 3.3698C4.26527 1.76598 6.832 1.71195 8.5007 3.20771Z"
//         fill="white"
//       />
//     </svg>
//   );

//   return (
//     <div className="rounded-md bg-white p-2 shadow-md shadow-neutral-200  ">
//       {/* Image */}
//       <div className="min-w-64 h-52 flex justify-center items-center bg-[#f2f5f7] rounded-sm relative">
//         {/* Displaying image if it is not a document */}
//         {!isDocument && (
//           <img className="w-full h-full object-cover " src={src} alt="" />
//         )}

//         {/* if isDocument then display the document icon as an image */}
//         {isDocument && isXlsx && (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="80"
//               height="81"
//               viewBox="0 0 80 81"
//               fill="none"
//             >
//               <g filter="url(#filter0_ii_1_3218)">
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M14.1333 7.16663C13.5074 7.16663 13 7.67403 13 8.29996V72.7C13 73.3259 13.5074 73.8333 14.1333 73.8333H65.8667C66.4926 73.8333 67 73.3259 67 72.7L67 23.8333L50.3333 7.16663H14.1333Z"
//                   fill="#32BD7A"
//                 />
//               </g>
//               <g filter="url(#filter1_dd_1_3218)">
//                 <path
//                   d="M32.5167 57.1667L39.9813 46.4525L47.4846 57.1667H51.0417L41.7071 44.1767L50.3696 32.1667H46.8125L39.9813 41.9004L33.1834 32.1667H29.6275L38.2205 44.1767L28.9584 57.1667H32.5167Z"
//                   fill="white"
//                 />
//               </g>
//               <path
//                 d="M65.4364 22.2708H51.8959L67 37.375V23.8333L65.4364 22.2708Z"
//                 fill="url(#paint0_linear_1_3218)"
//               />
//               <path
//                 d="M51.4667 23.8333L67 23.8333L50.3333 7.16665L50.3333 22.7C50.3333 23.3259 50.8407 23.8333 51.4667 23.8333Z"
//                 fill="#EBFFEC"
//               />
//               <defs>
//                 <filter
//                   id="filter0_ii_1_3218"
//                   x="13"
//                   y="7.09579"
//                   width="54"
//                   height="66.8083"
//                   filterUnits="userSpaceOnUse"
//                   color-interpolation-filters="sRGB"
//                 >
//                   <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                   <feBlend
//                     mode="normal"
//                     in="SourceGraphic"
//                     in2="BackgroundImageFix"
//                     result="shape"
//                   />
//                   <feColorMatrix
//                     in="SourceAlpha"
//                     type="matrix"
//                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                     result="hardAlpha"
//                   />
//                   <feOffset dy="-0.141667" />
//                   <feGaussianBlur stdDeviation="0.0354167" />
//                   <feComposite
//                     in2="hardAlpha"
//                     operator="arithmetic"
//                     k2="-1"
//                     k3="1"
//                   />
//                   <feColorMatrix
//                     type="matrix"
//                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
//                   />
//                   <feBlend
//                     mode="normal"
//                     in2="shape"
//                     result="effect1_innerShadow_1_3218"
//                   />
//                   <feColorMatrix
//                     in="SourceAlpha"
//                     type="matrix"
//                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                     result="hardAlpha"
//                   />
//                   <feOffset dy="0.141667" />
//                   <feGaussianBlur stdDeviation="0.0354167" />
//                   <feComposite
//                     in2="hardAlpha"
//                     operator="arithmetic"
//                     k2="-1"
//                     k3="1"
//                   />
//                   <feColorMatrix
//                     type="matrix"
//                     values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
//                   />
//                   <feBlend
//                     mode="normal"
//                     in2="effect1_innerShadow_1_3218"
//                     result="effect2_innerShadow_1_3218"
//                   />
//                 </filter>
//                 <filter
//                   id="filter1_dd_1_3218"
//                   x="27.9584"
//                   y="31.1667"
//                   width="31.0834"
//                   height="36"
//                   filterUnits="userSpaceOnUse"
//                   color-interpolation-filters="sRGB"
//                 >
//                   <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                   <feColorMatrix
//                     in="SourceAlpha"
//                     type="matrix"
//                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                     result="hardAlpha"
//                   />
//                   <feOffset dx="4" dy="6" />
//                   <feGaussianBlur stdDeviation="2" />
//                   <feColorMatrix
//                     type="matrix"
//                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
//                   />
//                   <feBlend
//                     mode="normal"
//                     in2="BackgroundImageFix"
//                     result="effect1_dropShadow_1_3218"
//                   />
//                   <feColorMatrix
//                     in="SourceAlpha"
//                     type="matrix"
//                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                     result="hardAlpha"
//                   />
//                   <feOffset />
//                   <feGaussianBlur stdDeviation="0.5" />
//                   <feColorMatrix
//                     type="matrix"
//                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
//                   />
//                   <feBlend
//                     mode="normal"
//                     in2="effect1_dropShadow_1_3218"
//                     result="effect2_dropShadow_1_3218"
//                   />
//                   <feBlend
//                     mode="normal"
//                     in="SourceGraphic"
//                     in2="effect2_dropShadow_1_3218"
//                     result="shape"
//                   />
//                 </filter>
//                 <linearGradient
//                   id="paint0_linear_1_3218"
//                   x1="55.2813"
//                   y1="18.8854"
//                   x2="70.3855"
//                   y2="33.9896"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stop-opacity="0.2" />
//                   <stop offset="1" stop-opacity="0" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           )}

//         {isDocument && isPdf && (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="80"
//             height="81"
//             viewBox="0 0 80 81"
//             fill="none"
//           >
//             <g filter="url(#filter0_ii_1_1995)">
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M14.2672 7.16833C13.5676 7.16833 13.0005 7.73544 13.0005 8.43501V72.5683C13.0005 73.2679 13.5676 73.835 14.2672 73.835H65.7338C66.4334 73.835 67.0005 73.2679 67.0005 72.5683V23.8349L50.3339 7.16833H14.2672Z"
//                 fill="#FA4E4E"
//               />
//             </g>
//             <path
//               d="M50.8271 52.0654C48.5775 51.8983 46.4117 51.0629 44.6621 49.5592C41.2463 50.3108 37.9967 51.3967 34.7475 52.7337C32.165 57.3283 29.7488 59.6675 27.6658 59.6675C27.2492 59.6675 26.7496 59.5842 26.4162 59.3333C25.4996 58.9158 25 57.9967 25 57.0779C25 56.3258 25.1667 54.2375 33.0812 50.8121C34.9146 47.4704 36.3304 44.0454 37.4971 40.4533C36.4971 38.4483 34.3312 33.5192 35.8304 31.0133C36.3304 30.0942 37.3304 29.5929 38.4137 29.6767C39.2467 29.6767 40.0796 30.0942 40.5796 30.7625C41.6629 32.2662 41.5796 35.4408 40.1629 40.1192C41.4963 42.6218 43.2426 44.8813 45.3283 46.8025C47.0783 46.4679 48.8275 46.2175 50.5771 46.2175C54.4929 46.3008 55.0762 48.1387 54.9929 49.225C54.9929 52.0654 52.2433 52.0654 50.8271 52.0654ZM27.4996 57.2446L27.7496 57.1612C28.9158 56.7437 29.8321 55.9083 30.4987 54.8221C29.2487 55.3233 28.2492 56.1587 27.4996 57.245V57.2446ZM38.58 32.1829H38.33C38.2467 32.1829 38.08 32.1829 37.9967 32.2662C37.6633 33.6862 37.9133 35.19 38.4967 36.5267C38.9967 35.1067 38.9967 33.6029 38.58 32.1829ZM39.1633 44.2962L39.08 44.4629L38.9967 44.3796C38.2467 46.3012 37.4133 48.2225 36.4971 50.0604L36.6637 49.9771V50.1437C38.5165 49.472 40.4085 48.914 42.3292 48.4729L42.2458 48.3896H42.4958C41.2458 47.1362 40.0796 45.7162 39.1633 44.2962ZM50.4937 48.7237C49.7437 48.7237 49.0775 48.7237 48.3275 48.8904C49.1608 49.3083 49.9942 49.4754 50.8271 49.5592C51.4104 49.6425 51.9937 49.5592 52.4933 49.3921C52.4933 49.1412 52.16 48.7237 50.4937 48.7237Z"
//               fill="white"
//             />
//             <path
//               d="M65.4365 22.2699L51.896 22.2699L67.0002 37.3741L67.0002 23.8324L65.4365 22.2699Z"
//               fill="url(#paint0_linear_1_1995)"
//             />
//             <path
//               d="M51.6 23.8324L67 23.8324L50.3333 7.16573L50.3333 22.5657C50.3333 23.2653 50.9004 23.8324 51.6 23.8324Z"
//               fill="#FDB8B8"
//             />
//             <defs>
//               <filter
//                 id="filter0_ii_1_1995"
//                 x="13.0005"
//                 y="7.08917"
//                 width="54"
//                 height="66.825"
//                 filterUnits="userSpaceOnUse"
//                 color-interpolation-filters="sRGB"
//               >
//                 <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                 <feBlend
//                   mode="normal"
//                   in="SourceGraphic"
//                   in2="BackgroundImageFix"
//                   result="shape"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="-0.158333" />
//                 <feGaussianBlur stdDeviation="0.0395833" />
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="shape"
//                   result="effect1_innerShadow_1_1995"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="0.158333" />
//                 <feGaussianBlur stdDeviation="0.0395833" />
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="effect1_innerShadow_1_1995"
//                   result="effect2_innerShadow_1_1995"
//                 />
//               </filter>
//               <linearGradient
//                 id="paint0_linear_1_1995"
//                 x1="55.2814"
//                 y1="18.8845"
//                 x2="70.3856"
//                 y2="33.9886"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stop-opacity="0.2" />
//                 <stop offset="1" stop-opacity="0" />
//               </linearGradient>
//             </defs>
//           </svg>
//         )}

//         {/* Icons overlapping on the image */}
//         <div className=" left-0">
//           {/* Favorite icon */}
//           <div
//             className="absolute top-2 right-2 w-9 h-9 rounded-full flex justify-center items-center bg-[rgba(0,0,0,0.28)] cursor-pointer "
//             onClick={favHandler}
//           >
//             {!isFav && notFavIcon}
//             {isFav && favIcon}
//           </div>

//           {/* Displaying Download and Print icon if it is a document  */}
//           {isDocument && <PrintDownloadOverlap src={src} name={name} />}
//         </div>
//       </div>

//       {/* File details */}
//       <div className="flex items-center py-2  ">
//         {/* File Icon */}
//         <div className="w-8 h-8 rounded-full bg-[#f2f2f3] flex justify-center items-center mr-3   ">
//           {/* File icon */}
          // <svg
          //   xmlns="http://www.w3.org/2000/svg"
          //   width="19"
          //   height="20"
          //   viewBox="0 0 19 20"
          //   fill="none"
          // >
          //   <g clip-path="url(#clip0_1_3214)">
          //     <g filter="url(#filter0_ii_1_3214)">
          //       <path
          //         fill-rule="evenodd"
          //         clip-rule="evenodd"
          //         d="M4.22086 2.08334C3.59493 2.08334 3.08752 2.59075 3.08752 3.21668V16.7833C3.08752 17.4093 3.59493 17.9167 4.22086 17.9167H14.7792C15.4051 17.9167 15.9125 17.4093 15.9125 16.7833V3.21668C15.9125 3.21546 15.9125 3.21425 15.9125 3.21304V6.04168L11.9542 2.08334H4.22086Z"
          //         fill="#32BD7A"
          //       />
          //     </g>
          //     <g filter="url(#filter1_dd_1_3214)">
          //       <path
          //         d="M7.72267 13.9583L9.49551 11.4137L11.2775 13.9583H12.1224L9.90539 10.8732L11.9627 8.02084H11.1179L9.49551 10.3326L7.881 8.02084H7.03649L9.07731 10.8732L6.87756 13.9583H7.72267Z"
          //         fill="white"
          //       />
          //     </g>
          //     <path
          //       d="M15.5412 5.67056L12.3253 5.67056L15.9126 9.2578V6.04166L15.5412 5.67056Z"
          //       fill="url(#paint0_linear_1_3214)"
          //     />
          //     <path
          //       d="M13.0875 6.04166L15.9125 6.04166L11.9541 2.08332L11.9541 4.90832C11.9541 5.53425 12.4616 6.04166 13.0875 6.04166Z"
          //       fill="#EBFFEC"
          //     />
          //   </g>
          //   <defs>
          //     <filter
          //       id="filter0_ii_1_3214"
          //       x="3.08752"
          //       y="2.01251"
          //       width="12.825"
          //       height="15.975"
          //       filterUnits="userSpaceOnUse"
          //       color-interpolation-filters="sRGB"
          //     >
          //       <feFlood flood-opacity="0" result="BackgroundImageFix" />
          //       <feBlend
          //         mode="normal"
          //         in="SourceGraphic"
          //         in2="BackgroundImageFix"
          //         result="shape"
          //       />
          //       <feColorMatrix
          //         in="SourceAlpha"
          //         type="matrix"
          //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          //         result="hardAlpha"
          //       />
          //       <feOffset dy="-0.141667" />
          //       <feGaussianBlur stdDeviation="0.0354167" />
          //       <feComposite
          //         in2="hardAlpha"
          //         operator="arithmetic"
          //         k2="-1"
          //         k3="1"
          //       />
          //       <feColorMatrix
          //         type="matrix"
          //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
          //       />
          //       <feBlend
          //         mode="normal"
          //         in2="shape"
          //         result="effect1_innerShadow_1_3214"
          //       />
          //       <feColorMatrix
          //         in="SourceAlpha"
          //         type="matrix"
          //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          //         result="hardAlpha"
          //       />
          //       <feOffset dy="0.141667" />
          //       <feGaussianBlur stdDeviation="0.0354167" />
          //       <feComposite
          //         in2="hardAlpha"
          //         operator="arithmetic"
          //         k2="-1"
          //         k3="1"
          //       />
          //       <feColorMatrix
          //         type="matrix"
          //         values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          //       />
          //       <feBlend
          //         mode="normal"
          //         in2="effect1_innerShadow_1_3214"
          //         result="effect2_innerShadow_1_3214"
          //       />
          //     </filter>
          //     <filter
          //       id="filter1_dd_1_3214"
          //       x="5.87756"
          //       y="7.02084"
          //       width="14.2448"
          //       height="16.9375"
          //       filterUnits="userSpaceOnUse"
          //       color-interpolation-filters="sRGB"
          //     >
          //       <feFlood flood-opacity="0" result="BackgroundImageFix" />
          //       <feColorMatrix
          //         in="SourceAlpha"
          //         type="matrix"
          //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          //         result="hardAlpha"
          //       />
          //       <feOffset dx="4" dy="6" />
          //       <feGaussianBlur stdDeviation="2" />
          //       <feColorMatrix
          //         type="matrix"
          //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          //       />
          //       <feBlend
          //         mode="normal"
          //         in2="BackgroundImageFix"
          //         result="effect1_dropShadow_1_3214"
          //       />
          //       <feColorMatrix
          //         in="SourceAlpha"
          //         type="matrix"
          //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          //         result="hardAlpha"
          //       />
          //       <feOffset />
          //       <feGaussianBlur stdDeviation="0.5" />
          //       <feColorMatrix
          //         type="matrix"
          //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          //       />
          //       <feBlend
          //         mode="normal"
          //         in2="effect1_dropShadow_1_3214"
          //         result="effect2_dropShadow_1_3214"
          //       />
          //       <feBlend
          //         mode="normal"
          //         in="SourceGraphic"
          //         in2="effect2_dropShadow_1_3214"
          //         result="shape"
          //       />
          //     </filter>
          //     <linearGradient
          //       id="paint0_linear_1_3214"
          //       x1="13.1294"
          //       y1="4.86653"
          //       x2="16.7166"
          //       y2="8.45377"
          //       gradientUnits="userSpaceOnUse"
          //     >
          //       <stop stop-opacity="0.2" />
          //       <stop offset="1" stop-opacity="0" />
          //     </linearGradient>
          //     <clipPath id="clip0_1_3214">
          //       <rect
          //         width="19"
          //         height="19"
          //         fill="white"
          //         transform="translate(0 0.5)"
          //       />
          //     </clipPath>
          //   </defs>
          // </svg>
//         </div>

//         {/* File Name and Date it was added */}
//         <div className="flex flex-col">
//           <div className="font-bold text-sm">{name}</div>
//           <div className="text-xs text-[#6f7376]">{created_at}</div>
//         </div>
//       </div>
//     </div>
//   );
// };






import React, { useState } from "react";
import PrintDownloadOverlap from "../PrintDownloadOverlap/PrintDownloadOverlap";

const FileTemp = ({ name, created_at, src }) => {
  const [isFav, setIsFav] = useState(false);
  const [isDocument, setIsDocument] = useState(false);
  const [isXlsx, setIsXlsx] = useState(false);
  const [isPdf, setIsPdf] = useState(false);

  const fileExtension = name.split('.').pop().toLowerCase();

  if (fileExtension === "jpg" || fileExtension === "png") {
    setIsDocument(false);
    
  } else if (fileExtension === "pdf" || fileExtension === "xlsx") {
    setIsDocument(true);

  }
  

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
  };

  const favHandler = () => {
    setIsFav(!isFav);
  };

  const notFavIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M8.50079 3.20771C10.1647 1.71417 12.7359 1.76375 14.3386 3.3698C15.9413 4.97584 15.9964 7.53454 14.5058 9.20338L8.50001 15.2185L2.49439 9.20338C1.00382 7.53454 1.05954 4.9718 2.66154 3.3698C4.26536 1.76598 6.83209 1.71195 8.50079 3.20771ZM13.3359 4.37049C12.274 3.30646 10.5596 3.2633 9.44712 4.26195L8.50143 5.1108L7.55523 4.26262C6.43952 3.26256 4.72825 3.30656 3.66328 4.37153C2.60804 5.42676 2.55507 7.11684 3.52753 8.2331L8.50001 13.2135L13.4727 8.2331C14.4455 7.11641 14.3927 5.42955 13.3359 4.37049Z"
        fill="white"
      />
    </svg>
  );

  const favIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M8.5007 3.20771C10.1646 1.71417 12.7358 1.76375 14.3385 3.3698C15.9412 4.97584 15.9963 7.53454 14.5057 9.20338L8.49992 15.2185L2.4943 9.20338C1.00373 7.53454 1.05945 4.9718 2.66145 3.3698C4.26527 1.76598 6.832 1.71195 8.5007 3.20771Z"
        fill="white"
      />
    </svg>
  );

  const documentPdfIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="81"
      viewBox="0 0 80 81"
      fill="none"
    >
      {/* Your PDF icon SVG code here */}
    </svg>
  );

  const documentXlsxIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="81"
      viewBox="0 0 80 81"
      fill="none"
    >
      {/* Your XLSX icon SVG code here */}
    </svg>
  );

  return (
    <div className="rounded-md bg-white p-2 shadow-md shadow-neutral-200  ">
      {/* Image */}
      <div className="min-w-64 h-52 flex justify-center items-center bg-[#f2f5f7] rounded-sm relative">
        {/* Displaying image if it is not a document */}
        {!isDocument && (
          <img className="w-full h-full object-cover " src={src} alt="" />
        )}

        {/* if isDocument then display the document icon as an image */}
        {isDocument && isXlsx && documentXlsxIcon}

        {isDocument && isPdf && documentPdfIcon}

        {/* Icons overlapping on the image */}
        <div className=" left-0">
          {/* Favorite icon */}
          <div
            className="absolute top-2 right-2 w-9 h-9 rounded-full flex justify-center items-center bg-[rgba(0,0,0,0.28)] cursor-pointer "
            onClick={favHandler}
          >
            {isFav ? favIcon : notFavIcon}
          </div>
        </div>
        {/* end of favorite icon */}
        {/* If PDF then show print/download overlap */}
        {isPdf && <PrintDownloadOverlap src={src} name={name} />}
      </div>

      {/* Document details */}
      <div className="flex items-center py-2">
        <div className="w-8 h-8 rounded-full bg-[#f2f2f3] flex justify-center items-center mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
          >
            {/* Your file icon SVG code here */}
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-sm">{name}</div>
          <div className="text-xs text-[#6f7376]">{created_at}</div>
        </div>
      </div>
    </div>
  );
};

export default FileTemp;
