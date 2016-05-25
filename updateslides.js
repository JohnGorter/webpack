var spawn = require('child_process').spawn;
const add = spawn('git', ['add','.']);
const commit = spawn('git', ['commit','-am\'test\'']);
// const add = spawn('git', ['add','.']);
 
console.log('starting add.')
startAndWait(add).then(() => {startAndWait(commit)});

function startAndWait(process) {
    return new Promise((resolve, reject) =>{
        console.log('starting process...')
        process.stdout.on('data', (data) => {
            console.log(`${data}`); 
        });

        process.stderr.on('data', (data) => {
            console.log(`${data}`);
            reject(); 
        });

        process.on('close', (code)=>{
            console.log(`exit code ${code}`);
            resolve(code);
        });
    });
}
