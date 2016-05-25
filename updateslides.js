var spawn = require('child_process').spawn;
const add = spawn('git', ['add','.']);
const commit = spawn('git', ['commit','-am\'testing\'']);
const push = spawn('git', ['push','.']);
 

startAndWait(add)
.then(() => {return startAndWait(commit);})
.then(() => {return startAndWait(push)});


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
