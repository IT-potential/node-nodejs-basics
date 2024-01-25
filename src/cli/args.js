const parseArgs = () => {
let procArgv = [];
  for (let j = 2; j < process.argv.length; j+=2) { 
   procArgv.push(process.argv[j].slice(2) + ' is ' + process.argv[j+1]); 
 }  
  console.log(procArgv.join(', '));
};

parseArgs();