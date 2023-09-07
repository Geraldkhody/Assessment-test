import React from 'react'

const ActiveFolder = React.createContext({
  activeFolderData: [],
  activeFileData: [],
  updateData: () => {}
})

export default ActiveFolder;