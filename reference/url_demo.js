const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

console.log(myUrl.href);
console.log(myUrl.toString());

//Hostname or root domain
console.log(myUrl.host);

//Hostname  without port
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialize query
console.log(myUrl.search);

//Search Params
console.log(myUrl.searchParams);

//Add params
//Serialize query
console.log(myUrl.searchParams.append('abc', 123));
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value,key) => console.log(`${key} : ${value}`));