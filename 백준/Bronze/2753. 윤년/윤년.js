const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const i = input.map(str => parseInt(str));

if(input[0]%400 === 0) {
    console.log(1)
    return
}
if(input[0]%4 !== 0 || input[0]%100 === 0) {
    console.log(0)
    return 
}
console.log(1)