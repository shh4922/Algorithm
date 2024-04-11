const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

if(!Number(input[1])||!Number(input[0])) {
    console.log(0)
} else {
    console.log(Number(input[0])/Number(input[1]))
}
