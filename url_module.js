var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2024&month=march';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2024&month=march''

var qdata = q.query; //returns an object: { year: 2024, month: 'march' }
console.log(qdata.month); //returns 'march'