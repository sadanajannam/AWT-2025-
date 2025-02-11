// Import named exports
import { greeting, greet, a, b } from './modulefile1.js'
// Import default export (sum function)
import sum from './modulefile1.js';
// Import everything from file2.js as 'user'
import * as user from './modulefile2.js';
// Import and rename variables
import { greeting as greetMessage, greet as sayHello } from './modulefile1.js';

// Use the imports
console.log(greeting); // Output: Hello, World!
greet("Alice"); // Output: Hello, Alice!

// Using default export
console.log(sum(a, b)); // Output: 30

// Importing everything from file2.js
console.log(user.name); // Output: Alice
console.log(user.age); // Output: 30

// Renaming imports
console.log(greetMessage); // Output: Hello, World!
sayHello("Bob"); // Output: Hello, Bob!
