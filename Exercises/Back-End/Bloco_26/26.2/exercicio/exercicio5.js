const fs = require('fs').promises

async function ChangeMultFiles() {
  const arrayStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];


  const promises = arrayStrings.map((item, index) => {
    return fs.writeFile(`File${index + 1}.txt`, item);
  });

  await Promise.all(promises);

  const namesFiles = [
    'File1.txt',
    'File2.txt',
    'File3.txt',
    'File4.txt',
    'File5.txt',
  ];
  
   const fileAll = namesFiles.map(async (file) => {
    const name = await fs.readFile(file, 'utf8');
    return name;
  })

  

  fs.writeFile('FileAll.txt', (await Promise.all(fileAll)).join(' '))

}

ChangeMultFiles()