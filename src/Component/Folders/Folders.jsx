import React from 'react'
import FolderTemp from '../../UI/FolderTemp/FolderTemp'

const Folders = () => {
  return (
    <div className='mt-10'>
        {/* Header */}
      <div className='font-bold text-[#2e3031] text-xl'>Folders</div>

      {/* Displaying the Folders */}
      <div className='grid grid-cols-4 gap-5 mt-6'>
        <FolderTemp />
        <FolderTemp />
        <FolderTemp />
        <FolderTemp />
      </div>
    </div>
  )
}

export default Folders;
