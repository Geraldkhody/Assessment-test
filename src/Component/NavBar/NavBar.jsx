import React, { useState } from "react";
import SortDropDown from "../SortDropDown/SortDropDown";

const NavBar = () => {
  const [showDropDown, setShowDropDown] = useState(false)

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      console.log(event.key);
    }
  };
  
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  }

  return (
    <div className="flex justify-between items-center max-h-9">
      <div className="relative flex justify-center items-center hover:bg-gray-100 group-[]:hover:text-[#252627] px-3 py-2 gap-12 h-full border-[#e5e6e6] border rounded-md cursor-pointer" onClick={toggleDropDown}>
        <span className="text-[#5e6164] ">Sort</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/outline/sort">
            <g id="sort">
              <path
                id="Vector"
                d="M14 5.16669H2C1.72667 5.16669 1.5 4.94002 1.5 4.66669C1.5 4.39335 1.72667 4.16669 2 4.16669H14C14.2733 4.16669 14.5 4.39335 14.5 4.66669C14.5 4.94002 14.2733 5.16669 14 5.16669Z"
                fill="#96999C"
              />
              <path
                id="Vector_2"
                d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
                fill="#96999C"
              />
              <path
                id="Vector_3"
                d="M9.33342 11.8333H6.66675C6.39341 11.8333 6.16675 11.6066 6.16675 11.3333C6.16675 11.06 6.39341 10.8333 6.66675 10.8333H9.33342C9.60675 10.8333 9.83342 11.06 9.83342 11.3333C9.83342 11.6066 9.60675 11.8333 9.33342 11.8333Z"
                fill="#96999C"
              />
            </g>
          </g>
        </svg>
        {showDropDown && <SortDropDown />}
      </div>

      

      <div className="relative h-full text-[#5e6164] flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M13.5233 12.4626L16.7353 15.6746L15.6746 16.7353L12.4626 13.5233C11.3077 14.4473 9.843 15 8.25 15C4.524 15 1.5 11.976 1.5 8.25C1.5 4.524 4.524 1.5 8.25 1.5C11.976 1.5 15 4.524 15 8.25C15 9.843 14.4473 11.3077 13.5233 12.4626ZM12.0185 11.9061C12.9356 10.9609 13.5 9.6717 13.5 8.25C13.5 5.34938 11.1506 3 8.25 3C5.34938 3 3 5.34938 3 8.25C3 11.1506 5.34938 13.5 8.25 13.5C9.6717 13.5 10.9609 12.9356 11.9061 12.0185L12.0185 11.9061Z"
            fill="#B6B8BA"
          />
        </svg>
        <input
          type="search"
          name="search"
          id="seach"
          placeholder="Search"
          autoComplete="on"
          spellCheck="true"
          onKeyPress={keyPressHandler}
          className="border pl-10 px-3 py-2 w-64 rounded-md focus:border-[#e5e6e6] focus:outline-none  "
        />
      </div>
    </div>
  );
};

export default NavBar;
