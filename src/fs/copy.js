import fs from 'fs';
import path from 'path';
const filesWay = path.join('src', 'fs', 'files');
const fileCopyWay = path.join('src', 'fs', 'files_copy');

const copy = async () => {
  fs.exists(fileCopyWay, exists => {
    exists ? console.log('FS operation failed') :
     fs.mkdir(fileCopyWay, err => {
      if (err) {
        throw err;
      } else {
        console.log('file sucsessfully copy');
      }
     }) 
  })
  
 fs.exists(filesWay, exists => {
  exists ?
  fs.readdir(filesWay, (err, files) => {
    files.forEach(file => {
      fs.copyFile(path.join(filesWay, file), path.join(fileCopyWay, file), err => {
        if (err) {
          throw err;
        } else {
          console.log('file sucsessfully copy');
        }
    })
   });
  }) : console.log('FS operation failed');
 }) 
};

await copy();
