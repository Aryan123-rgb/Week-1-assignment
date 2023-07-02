const fs = require('fs');

const content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus consequuntur amet alias reprehenderit. Accusantium totam ut commodi quis non? Quos enim error doloribus perspiciatis consectetur. Veritatis quidem reprehenderit distinctio dolores?'

fs.writeFile('./4.txt',content,'utf-8',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File written successfully.");
    }
})