const os = require('os');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPUs:', os.cpus().length);

console.log('Total memory (bytes):', os.totalmem());
console.log('Free memory (bytes):', os.freemem());

console.log('User info:', os.userInfo());

console.log('Network interfaces:', os.networkInterfaces());

