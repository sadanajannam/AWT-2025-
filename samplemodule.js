// // HTTP: The https module allows making HTTPS requests 

// const https = require('https');
// https.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
//   let data = '';
//   res.on('data', (chunk) => (data += chunk));
//   res.on('end', () => console.log('HTTPS Response:', JSON.parse(data)));
// }); //HTTPS Response: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// Os: 
// The os module provides operating system-related information

// const os = require('os');
// console.log('Platform:', os.platform());
// console.log('Free Memory:', os.freemem());
// //Platform: windows
// Free Memory: 123456789


// PATH:The path module handles and transforms file paths.

// const path = require('path');
// console.log('Base Name:', path.basename('/home/user/docs/file.txt'));

// //Base Name: file.txt


// UTIL: The util module provides helper functions like promisify

// const util = require('util');
// const fs = require('fs');
// const readFile = util.promisify(fs.readFile);
// readFile('./example.txt', 'utf8')
//   .then((data) => console.log('File Content:', data))
//   .catch(() => console.log('File not found!'));

// //File not found!




// FS: The fs module interacts with the file system.

// const fs = require('fs');
// fs.writeFile('example.txt', 'Hello, Node.js!', () => {
//   fs.readFile('example.txt', 'utf8', (err, data) => console.log('File Content:', data));
// });
// //File Content: Hello, Node.js!





// EVENTS:The events module implements event-driven programming
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => console.log('Event occurred!'));
myEmitter.emit('event');

// //Event occurred!



// STREAM: The stream module handles streaming data.

// const fs = require('fs');
// const stream = fs.createReadStream('example.txt', 'utf8');
// stream.on('data', (chunk) => console.log('Stream Data:', chunk));
// // //Stream Data: Hello, Node.js!



// BUFFER:The buffer module handles binary data.

const buffer = Buffer.from('Hello, Buffer!');
console.log('Buffer Content:', buffer.toString());

// //Buffer Content: Hello, Buffer!







// // Import the os module
const os = require('os');

// // Get the operating system's hostname
console.log('Hostname:', os.hostname());

// // Get the platform (e.g., 'win32', 'linux')
console.log('Platform:', os.platform());

// // Get the architecture (e.g., 'x64')
console.log('Architecture:', os.arch());

// // Get the number of CPUs and their information
console.log('CPU Info:', os.cpus());

// // Get the total system memory
console.log('Total Memory (bytes):', os.totalmem());

// // Get the free system memory
console.log('Free Memory (bytes):', os.freemem());

// // Get the system uptime (in seconds)
console.log('Uptime (seconds):', os.uptime());

// // Get the network interfaces
console.log('Network Interfaces:', os.networkInterfaces());

// // Get the home directory of the current user
console.log('Home Directory:', os.homedir());

// // Get the temporary files directory
console.log('Temporary Directory:', os.tmpdir());

// // Get the operating system type (e.g., 'Linux', 'Windows_NT')
console.log('OS Type:', os.type());

// // Get the operating system release
console.log('OS Release:', os.release());







// // Import the path module
const path = require('path');

// // Get the directory name of a file
const filePath = '/home/user/documents/file.txt';
console.log('Directory Name:', path.dirname(filePath));

// // Get the base name of a file
console.log('Base Name:', path.basename(filePath));

// // Get the file extension
console.log('File Extension:', path.extname(filePath));

// // Join paths
const joinedPath = path.join('/home', 'user', 'documents', 'file.txt');
console.log('Joined Path:', joinedPath);

// // Resolve an absolute path
const resolvedPath = path.resolve('file.txt');
console.log('Resolved Path:', resolvedPath);

// // Parse a path into an object
const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);

// // Format a path from an object
const formattedPath = path.format(parsedPath);
console.log('Formatted Path:', formattedPath);

// // Check if a path is absolute
console.log('Is Absolute:', path.isAbsolute(filePath));

// // Normalize a path
const messyPath = '/home/user/../documents/./file.txt';
console.log('Normalized Path:', path.normalize(messyPath));

// // Get the relative path between two paths
const relativePath = path.relative('/home/user/documents', '/home/user/pictures');
console.log('Relative Path:', relativePath);









// // The util module provides utility functions for debugging, 
// // formatting, and other essential operations.
// // util.format: Formats strings using placeholders (%s, %d, etc.).
// // util.inspect: Inspects objects and returns a string representation 
// // (useful for debugging).
// // util.promisify: Converts callback-based functions into promises
// //  for easier use with async/await.
// // util.deprecate: Marks a function as deprecated, displaying a
// //  warning when it's called.

// // Import the util module
// const util = require('util');

// // Example 1: Formatting strings
// const name = 'John';
// const age = 30;
// console.log(util.format('My name is %s, and I am %d years old.', name, age));

// // Example 2: Debugging with util.inspect
// const obj = { name: 'Alice', age: 25, hobbies: ['reading', 'coding'] };
// console.log('Object inspection:', util.inspect(obj, { showHidden: true, depth: null }));

// // Example 3: Promisify a callback-based function
// const fs = require('fs');
// const readFile = util.promisify(fs.readFile);

// (async () => {
//   try {
//     const data = await readFile('example.txt', 'utf8');
//     console.log('File content:', data);
//   } catch (err) {
//     console.error('Error reading file:', err.message);
//   }
// })();

// // Example 4: Using util.deprecate
// const oldFunction = util.deprecate(() => {
//   console.log('This function is deprecated.');
// }, 'oldFunction is deprecated. Use newFunction instead.');

// oldFunction();








const fs = require('fs');

// Example 1: Writing to a file
fs.writeFile('example.txt', 'Hello, Node.js!   sample msg', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File created and data written!');
  }
});

// // Example 2: Reading from a file
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//   } else {
//     console.log('File content:', data);
//   }
// });

// // Example 3: Appending to a file
// fs.appendFile('example.txt', '\nAppending some more text.', (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//   } else {
//     console.log('Data appended to file!');
//   }
// });

// // Example 4: Checking if a file exists
// fs.access('example.txt', fs.constants.F_OK, (err) => {
//   if (err) {
//     console.error('File does not exist.');
//   } else {
//     console.log('File exists.');
//   }
// });

// // Example 5: Deleting a file
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted!');
  }
});