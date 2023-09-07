import React from 'react'

const SortDropDown = () => {
  return (
    <div className='absolute top-12 bg-[#fcfcfc] left-0 p-2 shadow-sm shadow-gray-200 rounded-md text-sm text-[#212224] border'>
      <div className='px-2 w-36 py-1 cursor-pointer hover:bg-gray-100'>By name</div>
      <div className='px-2 w-36 py-1 cursor-pointer hover:bg-gray-100'>By time created</div>
    </div>
  )
}

export default SortDropDown
