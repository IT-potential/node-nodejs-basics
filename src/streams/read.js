import path from 'path';
import { createReadStream } from 'fs';
const fileWay = path.join('src', 'streams', 'files', 'fileToRead.txt');

const read = async () => {
      createReadStream(fileWay).pipe(process.stdout);
};

await read();