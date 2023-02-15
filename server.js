const assert = require('assert')

const newFolderName = function (folders) {
  // Assume this variable can be changed by user
  let newName = 'New Folder'

  // Get count of folders containing same name
  const filtered = folders.filter(name => {
    // If the names are equal, there is no number to slice the name
    if (name === newName) {
      return name
    }

    // This is the length of characters in ' (#)'
    const appendAmount = 4
    return name.slice(0, -appendAmount) === newName
  })

  if (filtered.length !== 0) {
    newName += ` (${filtered.length + 1})`
  }

  return newName
}

const runTests = function () {
  let folders = ['New Folder', 'New Folder (2)']
  assert.equal(newFolderName(folders), 'New Folder (3)')

  // Test for if an item is not named 'New Folder'
  folders.push('Not New Folder')
  assert.equal(newFolderName(folders), 'New Folder (3)')

  folders = []
  assert.equal(newFolderName(folders), 'New Folder')
}

runTests()
