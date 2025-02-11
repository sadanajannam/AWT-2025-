// Read Files ---- fs.readFile() method is used to read files on your computer.
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8000);




//fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
// fs.appendFile('mynewfile1.txt', 'Content Added to be is this!', 
// function (err) {
//   if (err) throw err;
//   console.log('Content Saved!');
// });
// }).listen(8080);



//fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created
// var fs = require('fs');
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });




//fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
// var fs = require('fs');
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });



//fs.appendFile() method appends the specified content at the end of the specified file:
// var fs = require('fs');
// fs.appendFile('mynewfile3.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });


//fs.unlink() method deletes the specified file
var fs = require('fs');
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});




// fs.rename() method renames the specified file
// var fs = require('fs');
// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });