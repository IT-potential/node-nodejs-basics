import path from 'path';
import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

const pathFile = path.join('src', 'zip', 'files', 'fileToCompress.txt');
const archiveFile = path.join('src', 'zip', 'files', 'archive.gz');

const unzipStream = createGunzip();
const unzippedFileStream = createWriteStream(pathFile);
const zippedFileStream = createReadStream(archiveFile);

const decompress = async () => {
    
    pipeline(
        zippedFileStream,
        unzipStream,
        unzippedFileStream,
        (err) => {
            if (err) {
                console.error('An error occurred during decompression:', err);
            } else {
                console.log('Decompression completed successfully');
            }
        }
    );
};

await decompress();