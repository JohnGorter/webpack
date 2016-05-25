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
       process.stdin.on('readable', () => {
            var chunk = process.stdin.read();
            if (chunk !== null) {
                 console.log(`data: ${chunk}`);
            }
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
