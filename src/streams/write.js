import path from 'path';
import { createReadStream } from 'fs';
import { createWriteStream } from 'fs';

const fileWay = path.join('src', 'streams', 'files');

const write = async () => {
    createReadStream(path.join(fileWay, 'fileToRead.txt'));
    process.stdin.pipe(createWriteStream(
        path.join(fileWay, 'fileToWrite.txt')));

 
    // createWriteStream(path.join(fileWay, 'fileToWrite.txt')).write(chunk);    
    // })
   
};

await write();