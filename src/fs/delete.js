import fs from 'fs';
import path from 'path';
const deleteWay = path.join('src', 'fs', 'files', 'fileToRemove.txt');

const remove = async () => {
  fs.exists(deleteWay, exists => {
    exists ? fs.unlink(deleteWay, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('Error');
        }
    }) : console.log('FS operation failed');
  })
    
};

await remove();