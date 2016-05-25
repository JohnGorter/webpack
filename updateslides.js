var spawn = require('child_process').spawnSync;
var options = {
    silent:true
}

console.log('adding files.....');
var result = spawn('git', ['add','.'], options);
console.log(result.output[1].toString());
console.log(result.output[2].toString());
console.log('commiting files...');
result =  spawn('git', ['commit','-am\'testingabc\''], options);
console.log(result.output[1].toString());
console.log(result.output[2].toString());
console.log('pushing repository to github...');
result =  spawn('git', ['push'], options);
console.log(result.output[1].toString()); 
console.log(result.output[2].toString()); 
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
