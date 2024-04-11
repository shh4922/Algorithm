const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const i = input.map(str => parseInt(str));

console.log(i[0] + i[1]+i[2])