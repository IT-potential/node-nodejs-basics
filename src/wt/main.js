import { Worker } from 'worker_threads';
import path from 'path';
import { cpus } from 'os';

const START_NUM = 10;
const workerScript = path.join('src', 'wt', 'worker.js');

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