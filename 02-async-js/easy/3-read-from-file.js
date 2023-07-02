const fs = require('fs');

fs.readFile('./3.html','utf-8',(err,content)=>{
    if(err){
        console.log(err);
    }
    console.log(content);
})

for (let i = 0, sum = 0; i < 1000000000; i++) {
    sum += i;
}

console.log('closing the program');