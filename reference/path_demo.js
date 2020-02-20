const path = require('path');

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extetion
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));

//Concatenate path
console.log(path.join(__dirname, 'test', 'test.html'));