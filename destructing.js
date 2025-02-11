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
// const {firstName , lastName , address} = user;
// console.log(firstName);
// console.log(lastName);
// console.log(address);


// const {...userdetails} = user;
// console.log(userdetails);

//REST OPERATOR in Destructing

// const { firstName,  ...userInfo} = user;
// console.log(firstName);
// console.log(userInfo);



// const user={
//     firstName: 'CVR',
//     lastName: 'IT',
//     age: 20,
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

const scores = [10,20,99,335,500,580];
// const [a, b, c] = scores;
// console.log(a);
// console.log(b);
// console.log(c);
const [x, , i, , c] = scores;
// const [x, , i, ,...other] = scores;
console.log(x);

console.log(i);console.log(c);
//console.log(b);
//console.log(other);
