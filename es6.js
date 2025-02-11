// OBJECTS IN ES6

// 1. OBJECT LITERAL ENHANCEMENTS
// In ES6, you can directly use variables and methods inside objects.

// Example 1: Shorthand for property names
// const name = 'Alice';
// const age = 25;
// const user = { name, age }; // Shorthand when variable names match property names
// console.log(user); // Output: { name: 'Alice', age: 25 }

// Example 2: Shorthand for methods
// const person = {
//   greet() {
//     console.log('Hello!');
//   }
// };
// person.greet(); // Output: Hello!

// Example 3: Computed property names
// const propName = 'dynamicKey';
// const obj = {
//   [propName]: 'Dynamic Value' // Computed property key
// };
// console.log(obj); // Output: { dynamicKey: 'Dynamic Value' }

// 2. OBJECT DESTRUCTURING
// Extract properties from objects into variables
// const employee = { id: 101, position: 'Developer', age: 30};
// const { a1, , c} = employee; // Destructuring
// console.log(a1);       // Output: 101
// console.log(c); // Output: Developer

// Default values during destructuring
// const customer = { name: 'Bob' };
// const { name: customerName, membership = 'Silver' } = customer;
// console.log(customerName); // Output: Bob
// console.log(membership);   // Output: Silver

// Nested destructuring
// const product = {
//   title: 'Laptop',
//   details: {
//     brand: 'Dell',
//     price: 800
//   }
// };
// const { title, details: { brand, price} } = product;
// console.log(title);
// console.log(brand); // Output: Dell 
// console.log(price); // Output: 800

// 3. OBJECT METHODS
// Object.assign() - Copies properties from one or more source objects to a target object
// const target = { a: 1 };
// const source = { b: 2, c: 3 };
// Object.assign(target, source); // Merges properties into the target object
// console.log(target); // Output: { a: 1, b: 2, c: 3 }

// Object.entries() - Converts an object into an array of [key, value] pairs
// const objectEntries = { x: 10, y: 20 };
// console.log(Object.entries(objectEntries));
// Output: [['x', 10], ['y', 20]]

// Object.keys() - Retrieves all the keys from an object
// console.log(Object.keys(objectEntries));
// Output: ['x', 'y']

// Object.values() - Retrieves all the values from an object
// console.log(Object.values(objectEntries));
// Output: [10, 20]

// 4. CLASSES AND OBJECT CREATION
// ES6 introduces classes as syntactic sugar for constructor functions
// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }

  // Method inside a class
//   describe() {
//     return `${this.name} is a 
//     ${this.species}.`;
//   }
// }
// const animal = new Animal('Lion', 'Wild Cat');
// console.log(animal.describe()); // Output: Lion is a Wild Cat.

// 5. SPREAD AND REST OPERATOR IN OBJECTS
// Spread operator (...) to copy or merge objects
// const obj1 = { p: 1, q: 2 };
// const obj2 = { q: 3, r: 4 };
// const mergedObj = { ...obj1, ...obj2 }; // q from obj2 overwrites q from obj1
// console.log(mergedObj); // Output: { p: 1, q: 3, r: 4 }

// Rest operator (...) to separate certain properties
// const { p, ...rest } = mergedObj;
// console.log(p);    // Output: 1
// console.log(rest); // Output: { q: 3, r: 4 }

// 6. OBJECT IMMUTABILITY WITH FREEZE
// Object.freeze() prevents modification of an object
// const frozenObject = Object.freeze({ key: 'value' });
// frozenObject.key = 'new value'; // This will not work
// console.log(frozenObject.key); // Output: value

// 7. OBJECT SETTERS AND GETTERS
// Define custom behavior when setting or getting properties
// const personWithAge = {
//   _age: 25,
//   get age() {
//     return `${this._age} years old`;
//   },
//   set age(newAge) {
//     if (newAge > 0) this._age = newAge;
//   }
// };
// console.log(personWithAge.age); // Output: 25 years old
// personWithAge.age = 30;         // Update age
// console.log(personWithAge.age); // Output: 30 years old




// CLASS CONCEPT IN ES6

// 1. DEFINING A CLASS
// class Person {
//   // Constructor is called when a new instance of the class is created
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

  // Instance method
  // greet() {
  //   return `Hello, my name is ${this.name}
  //    and I am
  //     ${this.age} years old.`;
  // }
// }

// Creating an instance of the Person class
// const person1 = new Person('Alice', 25);
// console.log(person1.greet()); // Output: Hello, my name is Alice and I am 25 years old.

// 2. CLASS INHERITANCE
// A subclass can inherit from a parent class using the `extends` keyword
// class Employee extends Person {
//   constructor(name, age, position) {
//     super(name, age); // Call the constructor of the parent class
//     this.position = position;
//   }

  // Overriding a method from the parent class
//   greet() {
//     return `Hello, I am ${this.name}, a ${this.position}, and I am ${this.age} years old.`;
//   }
// }
// Creating an instance of the Employee class
// const employee1 = new Employee('Bob', 30, 'Developer');
// console.log(employee1.greet());
// // Output: Hello, I am Bob, a Developer, and I am 30 years old.

// 3. STATIC METHODS
// Static methods belong to the class itself and not to any instance
// class Utility {
//   static add(a, b) {
//     return a + b;
//   }

//   static subtract(a, b) {
//     return a - b;
//   }
// }

// console.log(Utility.add(5, 3));       // Output: 8
// console.log(Utility.subtract(10, 4)); // Output: 6

// 4. GETTERS AND SETTERS
// Getters and setters allow controlled access to class properties
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this._price = price; // Use an underscore for internal/private property
//   }
//   // Getter for price
//   get price() {
//     return `${this._price}`;
//   }
//   // Setter for price
//   set price(newPrice) {
//     if (newPrice > 0) {
//       this._price = newPrice;
//     } else {
//       console.log('Price must be positive.');
//     }
//   }
// }

// const product1 = new Product('Laptop', 1000);
// console.log(product1.price); // Output: $1000
// product1.price = 1200;       // Update the price
// console.log(product1.price); // Output: $1200
// product1.price = -500;       // Invalid update
// Output: Price must be positive.

// 5. PRIVATE FIELDS (ES2022 Feature, Supported in Modern Environments)
// Private fields are prefixed with `#` and cannot be accessed directly outside the class
// class BankAccount {
//   #balance; // Private field

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   // Public method to get balance
//   getBalance() {
//     return this.#balance;
//   }

  // Public method to deposit money
//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     } else {
//       console.log('Deposit amount must be positive.');
//     }
//   }
// }

// const account = new BankAccount(500);
// console.log(account.getBalance()); // Output: 500
// account.deposit(200);
// console.log(account.getBalance()); // Output: 700
// console.log(account.#balance);  // Error: Private field '#balance' must be accessed within the class

// 6. USING A CLASS WITH DEFAULT PARAMETERS
// class Car {
//   constructor(make = 'Generic', model = 'Model', year = 2020) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   getDetails() {
//     return `${this.year} ${this.make} ${this.model}`;
//   }
// }

// const car1 = new Car('Toyota', 'Camry', 2023);
// console.log(car1.getDetails()); // Output: 2023 Toyota Camry

// const car2 = new Car(); // Uses default values
// console.log(car2.getDetails()); // Output: 2020 Generic Model




// Prototypical Inheritance in JavaScript
// In JavaScript, objects can inherit from other objects using the prototype chain. 
// Prototypical inheritance allows one object to serve as a prototype for another, 
// enabling property and method sharing.
// 1. Prototypical Inheritance Using Object.create()
// The Object.create() method creates a new object and sets its prototype to the 
// specified object
// Base object (Parent)
const animal = {
  eat() {
    console.log(`${this.name} is eating.`);
  },
  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
};
// Child object inherits from 'animal'
const dog = Object.create(animal); // 'animal' is the prototype of 'dog'
// Adding properties and methods to the child object
dog.name = 'Buddy';
dog.bark = function () {
  console.log(`${this.name} is barking.`);
};
// Accessing inherited and own methods
dog.eat();  // Output: Buddy is eating. (Inherited from 'animal')
dog.sleep(); // Output: Buddy is sleeping. (Inherited from 'animal')
dog.bark();  // Output: Buddy is barking. (Own method)




// 2. Prototypical Inheritance Using ES6 Classes
// In ES6, the class syntax simplifies inheritance. 

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

// Child class inherits from Parent class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name}, the ${this.breed}, is barking.`);
  }
}

// Creating an instance of the Dog class
const myDog = new Dog('Buddy', 'Golden Retriever');

// Accessing methods
myDog.eat();   // Output: Buddy is eating. (Inherited from Animal)
myDog.sleep(); // Output: Buddy is sleeping. (Inherited from Animal)
myDog.bark();  // Output: Buddy, the Golden Retriever, is barking.




//  3. Combining Object.create() and Custom Methods
 // Base object (Parent)
const vehicle = {
  start() {
    console.log(`${this.name} is starting.`);
  }
};

// Child object
const car = Object.create(vehicle);
car.name = 'Sedan';
car.drive = function () {
  console.log(`${this.name} is driving.`);
};

// Accessing methods
car.start(); // Output: Sedan is starting. (Inherited from 'vehicle')
car.drive(); // Output: Sedan is driving. (Own method)






// ============ EXPORT SECTION ============

// Named export: Student class
export class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  getDetails() {
    return `Student: ${this.name}, Age: ${this.age}, Course: ${this.course}`;
  }
}

// Named export: College class
export class College {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  getDetails() {
    return `College: ${this.name}, Location: ${this.location}`;
  }

  listStudents() {
    return this.students.map((student) => student.getDetails()).join('\n');
  }
}

// Default export: Helper function
export default function welcomeMessage() {
  return `Welcome to the College System!`;
}




// ============ IMPORT SECTION ============

// Importing default export
import welcome from './thisFile.js'; // Simulating module import in the same file

// Importing named exports
import { Student, College } from './thisFile.js'; // Again, simulating module import

// Using the imported modules
console.log(welcome()); // Output: Welcome to the College System!

// Create students
const student1 = new Student('Alice', 20, 'Computer Science');
const student2 = new Student('Bob', 22, 'Mechanical Engineering');

// Create a college
const myCollege = new College('Tech University', 'California');

// Add students to the college
myCollege.addStudent(student1);
myCollege.addStudent(student2);

// Print details
console.log(myCollege.getDetails());
// Output: College: Tech University, Location: California

console.log(myCollege.listStudents());
/*
Output:
Student: Alice, Age: 20, Course: Computer Science
Student: Bob, Age: 22, Course: Mechanical Engineering
*/







// Destructuring

// 1. Array Destructuring
const [a, b, c = 3] = [1, 2];
console.log(a, b, c); // Output: 1 2 3

// 2. Object Destructuring
const { name, age = 25 } = { name: "Alice" };
console.log(name, age); // Output: Alice 25

// 3. Renaming Variables
const { name: userName, age: userAge } = { name: "Bob", age: 30 };
console.log(userName, userAge); // Output: Bob 30

// 4. Nested Destructuring
const user = { name1: "John", address: { city: "Paris" } };
const { name1, address: { city } } = user;
console.log(name1, city); // Output: John Paris

// 5. Rest Operator
const [ ...xy] = [1, 2, 3, 4];
console.log(xy); // Output: 1 [2, 3, 4]

// 6. Default Values
const [x = 10] = [];
console.log(x); // Output: 10

// 7. Destructuring in Functions
function greet({ name, age = 18 }) {
  console.log(`${name} is ${age} years old.`);
}
greet({ name: "john" }); // Output: john is 18 years old.

