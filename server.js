const newFolderName = function (folders) {
  const newName = 'New Folder'

  for (let i = 0; i <= folders.length; i++) {
    const folder = i !== 0 ? `${newName} (${i + 1})` : newName

    if (!folders.includes(folder)) {
      return folder
    }
  }
}

module.exports = { newFolderName }
