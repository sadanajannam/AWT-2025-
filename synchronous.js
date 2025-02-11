// console.log('CVR');
// console.log('IT');
// console.log('III-B');


console.log('CVR');
console.log('IT');
calculate();
console.log('III-B');
function calculate(){
    let sum = 0;
    for(let i = 0; i< 10000000000; i++){
        sum +=i;
    }
    console.log('Math result ',sum)
 }