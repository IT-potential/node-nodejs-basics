import { createHash } from 'crypto';
import { readFile  } from 'fs/promises';
import path from 'path';
// import { getDirnameFromUrl } from '../utils/utils.js';
// const __dirname = getDirnameFromUrl(import.meta.url);
const fileWay = path.join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const content = await readFile(fileWay);
    const hash = createHash('sha256').update(content).digest('hex');
    console.log(hash);
};

await calculateHash();