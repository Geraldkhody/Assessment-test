import React from 'react'

const ActiveFolder = React.createContext({
  activeFolderData: [],
  activeFileData: [],
  updateData: () => {},
  filePreviewCall: () => {}
})

export default ActiveFolder;