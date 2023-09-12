import React from 'react'
import DownloadIcon from '../../UI/Icons/DownloadIcon'

const Header = ({hideFilePreviewIsShown}) => { 
    const closeFilePreviewHandler = () => {
        hideFilePreviewIsShown();
    }

  return (
    <div className="border-b-[1px] flex justify-between items-center px-6 py-3">
            <DownloadIcon />

        <div className="flex justify-between items-center text-[#53575A] px-2 py-1 bg-[#DFE1E2] rounded cursor-pointer" onClick={closeFilePreviewHandler}>
            <span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.00047 7.05767L11.3003 3.75781L12.2431 4.70062L8.94327 8.00047L12.2431 11.3003L11.3003 12.2431L8.00047 8.94327L4.70062 12.2431L3.75781 11.3003L7.05767 8.00047L3.75781 4.70062L4.70062 3.75781L8.00047 7.05767Z" fill="#53575A"/>
                </svg>
            </span>
            <span className="ml-1">Close</span>
            
        </div>
    </div>
  )
}

export default Header
