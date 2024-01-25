import fs from 'fs';
import path from 'path';
const fileWay = path.join('src', 'fs', 'files');

const list = async () => {
  fs.exists(fileWay, (exists) => {
    exists ?
        fs.readdir(fileWay, (err, files) => {
        if (err) {
            return console.log('something wrong');
        }
        files.forEach(file => {
            console.log(file);
        });
            
        }) : console.log('FS operation failed');
  })
};

await list();