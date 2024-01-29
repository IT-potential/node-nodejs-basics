import {Transform} from 'stream';

const reverse = new Transform ({
    transform(chunk, encoding, callback) {
        this.push(chunk.reverse());
        callback();
    }
}) 
const transform = async () => {
    process.stdin.pipe(reverse).pipe(process.stdout)
};

await transform();