const fs = require('fs');
const path = require('path');

//Create dir
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

//Create dir
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
//     if (err) throw err;

//     //Append file text
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
//         if (err) throw err;
//         console.log('File written to...');
//     });
//     console.log('File written to...');
// });

//Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), (err) => {
    if (err) throw err;
    console.log('Rename file...');
});