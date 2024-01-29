import path from 'path';
import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const pathFile = path.join('src', 'zip', 'files', 'fileToCompress.txt');
const archiveFile = path.join('src', 'zip', 'files', 'archive.gz');

const pathFileStream = createReadStream(pathFile);
const zipStream = zlib.createGzip();
const zippedFileStream = createWriteStream(archiveFile);

const compress = async () => {
        pathFileStream.pipe(zipStream).pipe(zippedFileStream)

};

await compress();