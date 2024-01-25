import fs from 'fs';
import path from 'path';
const fileWay = path.join('src', 'fs', 'files', 'wrongFilename.txt');
const renameFileWay = path.join('src', 'fs', 'files', 'properFilename.md');

const rename = async () => {
  fs.exists(renameFileWay, exists => {
    exists ? console.log('FS operation failed') :

    fs.exists(fileWay, exists => {
        exists ? 
        fs.rename (fileWay, renameFileWay, (err) => {
            if (err) {
                throw err;
            } else {
                console.log("Error");
            }
        }) : console.log('FS operation failed');
    })
  })
};

await rename();