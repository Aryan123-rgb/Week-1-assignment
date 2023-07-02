/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    waitTwoSecond().then(function(){
        console.log('Promise 2 resolved');
        waitThreeSecond().then(function(){
            console.log('Promise 3 resolved');
        })
    })
})

function calculateTime() {
    const start = Date.now();
    waitOneSecond().then(()=>{
        waitTwoSecond().then(()=>{
            waitThreeSecond().then(()=>{
                const end = Date.now();
                console.log(`All promises resolved in ${(end-start)/1000} seconds`);
            })
        })
    })
}
calculateTime();