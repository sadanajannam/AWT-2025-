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


// const userLeft = false
// const userWatchingme =true
// function watchpromise(){
//     return new Promise((resolve, reject) => {
//         if(userLeft){
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//         }else if (userWatchingme){
//             reject({
//                 name: 'User Watching Me ',
//                 message: 'User Details displayed'
//             })
//         }else{
//             resolve('Thumbs up and Bye')
//         }

//     })
// }
    
// watchpromise().then((message) => {
//     console.log('Success: ', +message)
// }).catch((error) => {
//     console.log(error.name + '' +error.message)

// })



// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
// })
// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')
// })
// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
// })
// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// })
