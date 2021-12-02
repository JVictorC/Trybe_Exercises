const fs = require('fs').promises;

async function writeFile(file, text) {
  await fs.writeFile(file, text);
  return 'ok';
}

module.exports = writeFile;