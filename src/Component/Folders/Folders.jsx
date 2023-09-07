import React, { useContext } from 'react'
import FolderTemp from '../../UI/FolderTemp/FolderTemp'
import ActiveFolder from '../../Store/ActiveFolder'

const Folders = ({folderData}) => {
  const ctx = useContext(ActiveFolder)

  return (
    <div className='mt-10'>
        {/* Header */}
      <div className='font-bold text-[#2e3031] text-xl'>Folders</div>

      {/* Displaying the Folders */}
      <div className='grid grid-cols-4 gap-5 mt-6'>
        {ctx.activeFolderData.map(item => (
          <FolderTemp key={item.id} {...item} />

        ))}
        
      </div>
    </div>
  )
}

export default Folders;
