// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }
// f(); 

// async function f() {
//     console.log('Async function.');
//     return Promise.resolve('Done');
// }
// f().then(function(result) {
//     console.log(result)
// });


//basic use of async
// const getData = async() => {
//     var data = "Hello World";
//     return data;
//     }
//     getData().then(data => console.log(data));



//await keyword is used inside the async function to wait
// for the asynchronous operation.
//basic use of the await keyword 

const getData = async() => {
    var y = await "Hello World";
    console.log(y);
}
console.log(1);
getData();
console.log(2);



// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}); 
});
//async function
async function asyncFunc() {
    // wait until the promise resolves 
    let result = await promise; 
    console.log(result);
    
}console.log('hello');
// calling the async function
asyncFunc();



//implementing several promises in a method and then that method we will use for displaying our result.
function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Promise Done");
        }, 3000);
    });
    let combined_promise = Promise.all([first_promise, second_promise]);
    return combined_promise;
    }
    async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
    }
    display();