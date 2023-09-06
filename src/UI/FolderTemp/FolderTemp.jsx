import React from "react";

const FolderTemp = () => {
  return (
    <div className="flex items-center border border-[#eff0f0] max-w-72 rounded-md px-3 py-2 cursor-pointer ">
        {/* Folder Icon */}
        <div className="w-8 h-8 rounded-full bg-[#f2f2f3] flex justify-center items-center mr-3   ">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            >
            <path
                d="M17.4166 6.33333V15.8333C17.4166 16.2706 17.0622 16.625 16.6249 16.625H2.37492C1.9377 16.625 1.58325 16.2706 1.58325 15.8333V5.54167H16.6249C17.0622 5.54167 17.4166 5.89611 17.4166 6.33333ZM9.82783 3.95833H1.58325V3.16667C1.58325 2.72945 1.9377 2.375 2.37492 2.375H8.24449L9.82783 3.95833Z"
                fill="#7A8085"
            />
            </svg>
        </div>

        {/* Folder Name and Size */}
        <div className="flex flex-col">
            <div className="font-bold text-sm">Name</div>
            <div className="text-xs text-[#6f7376]">size</div>
        </div>
    </div>
  );
};

export default FolderTemp;
