// const alphabet = ['A', 'B', 'C', 'D', 'E']
// const numbers = ['1', '2', '3', '4', '5']
// const a = alphabet[0]
// const b = alphabet[1]
// console.log(a)
// console.log(b)




// const alphabet = ['A', 'B', 'C', 'D', 'E']
// const numbers = ['1', '2', '3', '4', '5']
// const [a, b] = alphabet
// const [a, ,c] = alphabet
// const [a, ,c, ...rest] = alphabet
// const newArray = alphabet.concat(numbers)
// console.log(a)
// // console.log(b)
// console.log(c)
// console.log(rest)
// console.log(newArray)



// function sumAndMultiply(a, b){
//     return [a+b, a*b]
//     }
// const array = sumAndMultiply(2,5)
// console.log(array)


// function sumAndMultiply(a, b){
//     return [a+b, a*b]
//     }
// const [sum, multiply] = sumAndMultiply(2,5)
// console.log(sum)
// console.log(multiply)



function sumAndMultiply(a, b){
    return [a+b, a*b, a/b]
    }
const [sum, multiply, division = 'No division'] = sumAndMultiply(2,5)
console.log(sum)
console.log(multiply)
console.log(division)



//Working with Objets

// const user={
//     firstName: 'CVR',
//     lastName: 'IT',
//     address:{
//         city:'Hyderabad',
//         country: 'India'
//     }
// }
// const name = user.firstName;
// console.log(name);
// const address = user.address.city;
// console.log(address);



// //Destructing Syntax ----  const { identifier } = expression
// const user={
//     firstName: 'CVR',
//     lastName: 'IT',
//     address:{
//         city:'Hyderabad',
//         country: 'India'
//     }
// }
// const {firstName , lastName , address} = user;
// console.log(firstName);
// console.log(lastName);
// console.log(address);




// const user={
//     firstName: 'CVR',
//     lastName: 'IT',
//     address:{
//         city:'Hyderabad',
//         country: 'India'
//     }
// }
// const { ...userdetails} = user;
// console.log(userdetails);





//REST OPERATOR in Destructing
// const user={
//     firstName: 'CVR',
//     lastName: 'IT',
//     address:{
//         city:'Hyderabad',
//         country: 'India'
//     }
// }
// const { firstName,  ...userInfo} = user;
// console.log(firstName);
// console.log(userInfo);



// const user={
//     firstName: 'CVR',
//     lastName: 'IT',
//     //age: 20,
//     address:{
//         city:'Hyderabad',
//         country: 'India'
//     }
// }
// const {
//     firstName:fname, lastName:lname, age=10, email = 'cvr.ac.in' , 
//     address: {city}
// } = user;
// console.log(fname);
// console.log(lname);
// console.log(age);
// console.log(city);
// console.log(email);



//DESTRUCTING ---- ARRAYS

// const scores = [10,20,99,335,500,580];
// console.log(scores[0]);
// const [x, ,i,...restop] = scores;
// console.log(x);
// console.log(i);
// console.log(restop);



// const scores = [10,20,99,335,500,580];
// // const [x, b, i] = scores;
// //  const [x, , i, , c] = scores;
// const [x, , i, ,...other] = scores;
// console.log(x);
// // console.log(b);
// console.log(i);
// // console.log(b);
// console.log(other);
