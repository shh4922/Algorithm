const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(Number(input[0]) + Number(input[1]))
console.log(Number(input[0]) - Number(input[1]))
console.log(Number(input[0]) * Number(input[1]))
console.log(Math.floor(Number(input[0]) / Number(input[1])))
console.log(Number(input[0]) % Number(input[1]))