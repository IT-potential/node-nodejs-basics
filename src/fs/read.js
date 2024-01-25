import fs from 'fs';
import path from 'path';
const readWay = path.join('src', 'fs', 'files', 'fileToRead.txt');

const read = async () => {
fs.exists(readWay, exists => {
    exists ?
     fs.readFile(readWay, 'utf-8', (err, data) => {
        console.log(data);
     }) : console.log('FS operation failed');
})
 
};

await read();