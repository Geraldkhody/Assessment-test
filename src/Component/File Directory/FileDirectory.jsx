import React, { useContext, useEffect, useState } from 'react';
import Folders from '../Folders/Folders';
import Files from '../Files/Files';
import ActiveFolder from '../../Store/ActiveFolder';

const FileDirectory = ({showFilePreviewIsShown}) => {
  const [activeFolderData, setActiveFolderData] = useState([])
  const [activeFileData, setActiveFileData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ctx = useContext(ActiveFolder);

  useEffect(() => {
    fetchDirectory();
  }, []);

  const fetchDirectory = async () => {
    try {
      const res = await fetch('http://3wdz.c.time4vps.cloud:3000/');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();

     

      setActiveFolderData(data.filter(item => item.type === 'folder'))
      setActiveFileData(data.filter(item => item.type === 'file'))
      
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      setError(error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  const updateDataHandler = (contents) => {
    setActiveFolderData(contents.filter(item => item.type === 'folder'))
    setActiveFileData(contents.filter(item => item.type === 'file'))
  }

  const filePreviewCallHandler = (items) => {
    showFilePreviewIsShown(items)
  }

  if (loading) {
    return <div>Loading...</div>; // Display a loading message
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message
  }

  return (
    <ActiveFolder.Provider value={{
      activeFolderData: activeFolderData,
      activeFileData: activeFileData,
      updateData: updateDataHandler,
      filePreviewCall: filePreviewCallHandler,
    }} >
      <div>
        <Folders folderData={ctx.activeFolderData} />
        <Files fileData={ctx.activeFileData} />
      </div>
    </ActiveFolder.Provider>
  );
};

export default FileDirectory;
