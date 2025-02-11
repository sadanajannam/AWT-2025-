// Readable Stream: Used for reading data from a source.
const fs = require('fs');
const readableStream = fs.createReadStream('demofile.txt', 'utf8');
readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});
readableStream.on('end', () => {
    console.log('Finished reading.');
});




// Writable Stream: Used for writing data to a destination.
// const fs = require('fs');
// const writableStream = fs.createWriteStream('output.txt');
// writableStream.write('Hello, ');
// writableStream.write('world!');
// writableStream.end();


