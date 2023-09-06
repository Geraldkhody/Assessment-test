import React from 'react'
import FileTemp from '../../UI/FileTemp/FileTemp'

const Files = () => {
  return (
    <div className='mt-10'>
      {/* Header */}
        <div className='font-bold text-[#2e3031] text-xl'>Files</div>

        {/* Displaying the Files */}
        <div className='grid grid-cols-4 gap-5 mt-6'>
            <FileTemp />
            <FileTemp />
            <FileTemp />
            <FileTemp />
            <FileTemp />
            <FileTemp />
            <FileTemp />
        </div>
      
    </div>
  )
}

export default Files
