const fs = require("fs");

async function saveFiles(filename, array) {
  try {
    return await fs.promises.writeFile(filename, JSON.stringify(array, null, 2));

  }
  catch (err) {
    console.log(err);
  }
}

module.exports = saveFiles;