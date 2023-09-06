import React, { useState } from "react";
import PrintDownloadOverlap from "../PrintDownloadOverlap/PrintDownloadOverlap";

const FileTemp = ({name, created_at}) => {
  const [isFav, setIsFav] = useState(false);
  const [isDocument, setIsDocument] = useState(true);

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

  return (
    <div className="rounded-md bg-white p-2 shadow-md shadow-neutral-200  ">
      {/* Image */}
      <div className="min-w-64 h-52 flex justify-center items-center bg-[#f2f5f7] rounded-sm relative">
        {/* Displaying image if it is not a document */}
        {!isDocument && (
          <img
            className="w-full h-full object-cover "
            src="image/aaa.jpg"
            alt=""
          />
        )}

        {/* if isDocument then display the document icon as an image */}
        {isDocument && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="81"
            viewBox="0 0 80 81"
            fill="none"
          >
            <g filter="url(#filter0_ii_1_3218)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.1333 7.16663C13.5074 7.16663 13 7.67403 13 8.29996V72.7C13 73.3259 13.5074 73.8333 14.1333 73.8333H65.8667C66.4926 73.8333 67 73.3259 67 72.7L67 23.8333L50.3333 7.16663H14.1333Z"
                fill="#32BD7A"
              />
            </g>
            <g filter="url(#filter1_dd_1_3218)">
              <path
                d="M32.5167 57.1667L39.9813 46.4525L47.4846 57.1667H51.0417L41.7071 44.1767L50.3696 32.1667H46.8125L39.9813 41.9004L33.1834 32.1667H29.6275L38.2205 44.1767L28.9584 57.1667H32.5167Z"
                fill="white"
              />
            </g>
            <path
              d="M65.4364 22.2708H51.8959L67 37.375V23.8333L65.4364 22.2708Z"
              fill="url(#paint0_linear_1_3218)"
            />
            <path
              d="M51.4667 23.8333L67 23.8333L50.3333 7.16665L50.3333 22.7C50.3333 23.3259 50.8407 23.8333 51.4667 23.8333Z"
              fill="#EBFFEC"
            />
            <defs>
              <filter
                id="filter0_ii_1_3218"
                x="13"
                y="7.09579"
                width="54"
                height="66.8083"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-0.141667" />
                <feGaussianBlur stdDeviation="0.0354167" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1_3218"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.141667" />
                <feGaussianBlur stdDeviation="0.0354167" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_1_3218"
                  result="effect2_innerShadow_1_3218"
                />
              </filter>
              <filter
                id="filter1_dd_1_3218"
                x="27.9584"
                y="31.1667"
                width="31.0834"
                height="36"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="6" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_3218"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_1_3218"
                  result="effect2_dropShadow_1_3218"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1_3218"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_3218"
                x1="55.2813"
                y1="18.8854"
                x2="70.3855"
                y2="33.9896"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0.2" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {/* Icons overlapping on the image */}
        <div className=" left-0">
          {/* Favorite icon */}
          <div
            className="absolute top-2 right-2 w-9 h-9 rounded-full flex justify-center items-center bg-[rgba(0,0,0,0.28)] cursor-pointer "
            onClick={favHandler}
          >
            {!isFav && notFavIcon}
            {isFav && favIcon}
          </div>

          {/* Displaying Download and Print icon if it is a document  */}
          {isDocument && <PrintDownloadOverlap />}
        </div>
      </div>

      {/* File details */}
      <div className="flex items-center py-2  ">
        {/* File Icon */}
        <div className="w-8 h-8 rounded-full bg-[#f2f2f3] flex justify-center items-center mr-3   ">
          {/* File icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
          >
            <g clip-path="url(#clip0_1_3214)">
              <g filter="url(#filter0_ii_1_3214)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.22086 2.08334C3.59493 2.08334 3.08752 2.59075 3.08752 3.21668V16.7833C3.08752 17.4093 3.59493 17.9167 4.22086 17.9167H14.7792C15.4051 17.9167 15.9125 17.4093 15.9125 16.7833V3.21668C15.9125 3.21546 15.9125 3.21425 15.9125 3.21304V6.04168L11.9542 2.08334H4.22086Z"
                  fill="#32BD7A"
                />
              </g>
              <g filter="url(#filter1_dd_1_3214)">
                <path
                  d="M7.72267 13.9583L9.49551 11.4137L11.2775 13.9583H12.1224L9.90539 10.8732L11.9627 8.02084H11.1179L9.49551 10.3326L7.881 8.02084H7.03649L9.07731 10.8732L6.87756 13.9583H7.72267Z"
                  fill="white"
                />
              </g>
              <path
                d="M15.5412 5.67056L12.3253 5.67056L15.9126 9.2578V6.04166L15.5412 5.67056Z"
                fill="url(#paint0_linear_1_3214)"
              />
              <path
                d="M13.0875 6.04166L15.9125 6.04166L11.9541 2.08332L11.9541 4.90832C11.9541 5.53425 12.4616 6.04166 13.0875 6.04166Z"
                fill="#EBFFEC"
              />
            </g>
            <defs>
              <filter
                id="filter0_ii_1_3214"
                x="3.08752"
                y="2.01251"
                width="12.825"
                height="15.975"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-0.141667" />
                <feGaussianBlur stdDeviation="0.0354167" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1_3214"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.141667" />
                <feGaussianBlur stdDeviation="0.0354167" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_1_3214"
                  result="effect2_innerShadow_1_3214"
                />
              </filter>
              <filter
                id="filter1_dd_1_3214"
                x="5.87756"
                y="7.02084"
                width="14.2448"
                height="16.9375"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="6" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_3214"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_1_3214"
                  result="effect2_dropShadow_1_3214"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1_3214"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_3214"
                x1="13.1294"
                y1="4.86653"
                x2="16.7166"
                y2="8.45377"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0.2" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
              <clipPath id="clip0_1_3214">
                <rect
                  width="19"
                  height="19"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* File Name and Date it was added */}
        <div className="flex flex-col">
          <div className="font-bold text-sm">{name}</div>
          <div className="text-xs text-[#6f7376]">{created_at}</div>
        </div>
      </div>
    </div>
  );
};

export default FileTemp;
