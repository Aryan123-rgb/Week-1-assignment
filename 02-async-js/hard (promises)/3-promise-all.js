/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,3000);
    })
}

waitOneSecond().then(function(){
    console.log('Promise 1 resolved');
})
waitTwoSecond().then(function(){
    console.log('Promise 2 resolved');
})
waitThreeSecond().then(function(){
    console.log('Promise 3 resolved');
})

function calculateTime() {
    const start = Date.now();
    
    return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(()=>{
		const endTime = Date.now();
		const totalTime = (endTime - start)/1000;
		console.log(`All promises resolved in ${totalTime} seconds.`);
		});
}
calculateTime();