// Generators are used to execute particular code and pause it with yield

 
function* myGenerator(){
yield 1; //yield is a checkpoint or pause
yield 2;
yield 3;
 }
// console.log(myGenerator().next().value);
// console.log(myGenerator().next().value);
// console.log(myGenerator().next());
// console.log(myGenerator().next());
// const generatorObject = myGenerator();
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next().value);
// console.log(generatorObject.next());




// const generatorObject = myGenerator();
// console.log(generatorObject.next().value);
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());


//Example2

// function* sampleGenerator(){
//     yield 'Apples'; //yield is a checkpoint or pause
//     yield 'Banana';
//     console.log('ok, this is the line after Banana');
//     yield 'Mango';
// }
// let sample  = sampleGenerator();
// console.log(sample.next());
// console.log(sample.next());
// console.log(sample.next());
// console.log(sample.next());

// console.log('---------------------');

function* getNextId(){
    let id =0;
    while(id < 3)
    yield id++;
}
let createUser = getNextId();
console.log(createUser.next().value);
console.log(createUser.next().value);
console.log('OK, lets print next lines');
console.log(createUser.next());
console.log(createUser.next());