import path from 'path';
import { fork } from 'child_process';

const childModule = path.join('src', 'cp', 'files', 'script.js');

const spawnChildProcess = async (args) => {
   fork(childModule, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 'a', 2, 'b']);
