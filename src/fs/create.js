import fs from 'fs';
import path from 'path';

const freshWay = path.join('src', 'fs', 'files','fresh.txt');

const create = async () => {
  fs.exists(freshWay, (exists) => {
    if (exists) { 
        console.log('FS operation failed');
    } else {
        fs.writeFile(freshWay, "I'm fresh and young", err => {
        if (err) {
            console.error(err);
        } else {
            console.log('Fresh file written successfully');
        }
    });
    }
  })
    
};

await create();

