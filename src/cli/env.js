const parseEnv = () => {
let arr = [];
  for (const el in process.env) {
    if (el.slice(0, 4) === 'RSS_') {
       arr.push(el + '=' + process.env[el]);
  }
 }
 console.log(arr.join('; '));
};

parseEnv();