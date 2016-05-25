var spawn = require('child_process').spawnSync;

spawn('git', ['add','.']);
spawn('git', ['commit','-am\'testing\'']);
spawn('git', ['push','.']);

 

// startAndWait('git', ['add','.'])
// .then(() => {return startAndWait('git', ['commit','-am\'testing\'']);})  
// .then(() => {return startAndWait('git', ['push','.'])});


function startAndWait(process, args) {
    return new Promise((resolve, reject) =>{
         console.log('starting process...');
        const p = spawn(process, args);
       
        p.stdin.on('readable', () => {
            var chunk = process.stdin.read();
            if (chunk !== null) {
                 console.log(`data: ${chunk}`);
            }
          });


        p.stderr.on('readable', () => {
            var chunk = process.stdin.read();
            if (chunk !== null) {
                 console.log(`data: ${chunk}`);
            }
          });

        p.on('close', (code)=>{
            console.log(`exit code ${code}`);
            resolve(code);
        });
    });
}
