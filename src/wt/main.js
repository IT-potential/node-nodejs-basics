import { Worker } from 'worker_threads';
import path from 'path';
import { cpus } from 'os';
import { fileURLToPath } from 'node:url';

const START_NUM = 10;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerScript = path.join(__dirname, 'worker.js');

const fibonacciWorkerService = (number) => new Promise(resolve => {
    const worker = new Worker(workerScript, { workerData: number });
    
    worker.on('message', data => resolve({
        status: 'resolved',
        data
    }));
    worker.on('error', data => resolve({
        status: 'error',
        data: null
    }));
})

const performCalculations = async () => {
    const workerPool = Array.from({length: cpus().length}, (_, i) =>
        fibonacciWorkerService(START_NUM + i));
        const result = await Promise.all(workerPool);
        console.log(result);
  
};

await performCalculations();