'use strict'
let bits = require('node-bitarray');

var  hits = [];

console.log(undefined == 0)
for (let i=0; i < 1024; i++){
    if (test(i)) {
        console.log("found one: " + i + ": " + bits.parse(i));
        hits.push(i);
    }
}

var result = [];
for (var j = 0; j < hits.length; j++) { 
    if (tryresults(j)) { console.log("HIT!"); break; }
    result = [];
}
    
console.log("Done")

function tryresults(i){
    console.log("===");
    console.log("Trying with start    " + hits[i] + ": " + bits.parse(i) );
    
    for (var m = 0; m < hits.length; m++){
      if (hits[m] !== hits[i] && isValid(result, hits[m])){
        console.log("pushing another line " + hits[m] + ": " + bits.parse(i) )
        result.push(hits[m]);
      }
    }
    if (result.length == 10)
      return true;
    return false;
}

function isValid(array, value){
    // test if three values are the same at column level
    if (array.length < 2) return true;
    for (var k=1; k < array.length; k++)
    {
        var bytesrowprev = bits.parse(array[k-1]);
        var bytesrowcurr = bits.parse(array[k]);
        var bytesrownext = bits.parse(value);
        for (var l=0; l<10; l++)
           if (bytesrowprev[l] === bytesrowcurr[l] && bytesrowcurr[l] === bytesrownext[l])
             return false; 
    }   
    return true;
}

for (let i = 0; hits.length; i++)
{
    // find all pairs that column up to 5 each
    // need 5 from above 500
    // need 5 from below 500
    
}

function test(i){
    let ibits = bits.parse(i); 
    for (var j = 1; j < 9; j++)
    {
        if (i < 128) return false;
        if (ibits[j-1] === ibits[j] && ibits[j+1] === ibits[j])
          return false;
    }
    var ones = 0; 
    var zeros = 0; 
    for (var k = 0; k < 10; k++)
    {
        if (ibits[k] == 0 || ibits[k] === undefined)
          zeros++;
        else
          ones++;
    }
    if (zeros == 5 && ones == 5) return true;
    return false;
}