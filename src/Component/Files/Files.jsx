import React, { useContext } from 'react'
import ActiveFolder from '../../Store/ActiveFolder'
import FileTemp2 from '../../UI/FileTemp/FileTemp2';

const Files = ({ fileData }) => {
  const ctx = useContext(ActiveFolder);

  return (
    <div className='mt-10'>
      {/* Header */}
      <div className='font-bold text-[#2e3031] text-xl'>Files</div>

      {/* Displaying the Files */}
      <div className='grid grid-cols-4 gap-5 mt-6'>
        {ctx.activeFileData.map(item => (
          <FileTemp2 key={item.id} {...item} />
        ))}
      </div>

    </div>
  )
}

export default Files
