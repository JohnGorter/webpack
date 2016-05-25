var spawn = require('child_process').spawnSync;
var options = {
    stdout:'inherit',
    strerr:'inherit',
    stdin:'inherit',
}

console.log('adding files.....');
spawn('git', ['add','.'], options);
console.log('commiting files...');
spawn('git', ['commit','-am\'testing\''], options);
console.log('pushing repository to github...');
spawn('git', ['push','.'], options);
console.log('Done.');

 

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
