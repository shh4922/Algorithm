const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const i = input.map(str => parseInt(str));

switch (true) {
    case (i[0] >= 90):
        console.log("A")
        break
    case (i[0] >= 80):
        console.log("B")
        break
    case (i[0] >= 70):
        console.log("C")
        break
    case (i[0] >= 60):
        console.log("D")
        break
    default:
        console.log("F")
        break
}