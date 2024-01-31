import path, { dirname } from 'path';
import { fileURLToPath } from "url";
import { readFile } from 'fs/promises';
import { release, version } from 'os';
import { createServer } from 'http';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const aPath = path.join(__dirname, "files", "a.json");
const bPath = path.join(__dirname, "files", "b.json");

// import('./files/c.js');
// import a from (aPath);
// import b from (bPath);
const random = Math.random();
const a = await readFile(aPath);
const b = await readFile(bPath);

const unknownObject = random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

module.exports = {
    unknownObject,
    myServer,
};

