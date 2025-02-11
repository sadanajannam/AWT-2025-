// Template Literals       ${}



// let productName = "Laptop"
// let quantity = 2;
// let description = "I have ordered " + quantity +" "+productName ;
// console.log(description);

// let description2 = `I have ordered 
// ${quantity}  
// ${productName}`;
// console.log(description2);




// let productName = "Laptop"
// let quantity = 2;
// function deliverydate(){
//     return "12-02-2024";
//     }
//  let description = "I have ordered " + quantity + " " + 
// productName+ " from \"amazon\" last week";
// console.log(description);

// let description2 = `I have ordered ${quantity} ${productName}
//  from "amazon" last week and 
// estimated delivery for this product is 
// ${deliverydate()}`;
// console.log(description2);







let productName = "Laptop"
let quantity = 2;
let status = "delivered"
let productstatus = "status of the product is ";
productstatus += (status === 'delivered') ? 'green': 'red';
function estimatedDelivery()
{
    return "07-02-2023";
}
let description2 = `I have ordered ${quantity} ${productName} 
from "amazon" last week and
 estimated delivery for this product is ${estimatedDelivery()} 
 and following is the status: ${productstatus}`;
console.log(description2);





// let num = 10;
// let strNum = '10';

// console.log(num == strNum);  // true, because '10' is converted to a number before comparison
// console.log(num === strNum); // false, because they are of different types

// let bool = false;
// let zero = 0;

// console.log(bool == zero);   // true, because false is coerced to 0 before comparison
// console.log(bool === zero);  // false, because they are of different types




