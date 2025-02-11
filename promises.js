// const p1 = Promise.resolve('hello CVR');
// const p2 = Promise.reject('Rejected');
// const p3 = 100;
// const p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Done');
// })

// Promise.any([ p3, p4 ]).then((value) => console.log(value));


let p = new Promise((resolve, reject) =>{
    let a = 1 + 1
    if (a==2){
        resolve('Success');
   } else {
    reject('Failed')
   }
})
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})