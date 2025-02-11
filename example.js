// class Parent {
//     constructor() {
//       this.age = 50;
//     }
  
//     printAge() {
//       console.log("Parent's age is ${this.age}");
//     }
//   }  
//   class Child extends Parent {
//     constructor() {
//       super();
//       this.age = 30;
//     }
  
//     printAge() {
//       console.log("Child's age is ${this.age}");
//     }
//   }
//   const parent = new Parent();
// parent.printAge(); // Output: Parent's age is 50

// const child = new Child();
// child.printAge(); // Output: Child's age is 30















// let age = 50; // Global age variable for Parent
// class Parent {
//   constructor() {
//     this.age = age;
//   }
//   printAge() {
//     console.log("Parent's age is ${this.age}");
//   }
// }
// class Child extends Parent {
//   constructor() {
//     super();
//     this.childAge = 30;
//   }

//   printChildAge() {
//     console.log("Child's age is ${this.childAge}");
//   }
// }
// const parent = new Parent();
// parent.printAge(); // Output: Parent's age is 50

// const child = new Child();
// child.printAge(); // Output: Parent's age is 50 (inherits from Parent class)
// child.printChildAge(); // Output: Child's age is 30





// function sayHello() {
//     console.log("Hello, this is a message from the first console.log");
//     console.log("This is another message, from the second console.log");
//     console.log("Yet another message, this time from the third console.log");
//     console.log("Final message, from the fourth console.log");
// }

// // Call the function to execute it
// sayHello();




// function* generateSequence() {
//     console.log("Start of generator function");
//     yield 'First value';
//     console.log("After first yield");
//     yield 'Second value';
//     console.log("After second yield");
//     yield 'Third value';
//     console.log("End of generator function");
// }
// // Create a generator
// const generator = generateSequence();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());






// // Iterate over the generator
// for (let value of generator) {
//     console.log("Inside for loop:", value);
// }







// function* generateValues(yieldValue) {
//     let i = 1;
//     yield Initial value: ${yieldValue};
//     i++;
//     console.log(After increment: ${i});
//     yield 3;
// }

// const generator = generateValues(10);

// console.log(generator.next().value); // Initial value: 10
// console.log(generator.next().value); // After increment: 2, 3





// function* myGenerator() {
//     console.log("Generator started, yielding 'hello'");
//     yield 'hello';
//     return 'end';
//     console.log("This will not be logged");
//     yield 'world';
//     console.log("This will also not be logged");
    
// }

// const generator = myGenerator();

// console.log(generator.next().value); 
// console.log(generator.next().value);







