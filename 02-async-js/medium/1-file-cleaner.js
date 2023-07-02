const fs = require('fs');

fs.readFile('./1.txt','utf-8',(err,content)=>{
    if(err){
        console.error(err);
    }
    let fileData = content.replace(/\s+/g, " ").trim();
    console.log(fileData);
    updatefile(fileData)
})

const updatefile = (fileData) => {
    fs.writeFile('./1.txt',fileData,'utf-8',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File written successfully.");
        }
    })
}