const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(' ')

let result = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] !== '') {
        result++
    }
}
console.log(result)