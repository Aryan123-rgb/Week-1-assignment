setInterval(()=>{
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`); 
},1000)