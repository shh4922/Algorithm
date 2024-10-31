const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

input.sort((a, b) => a - b);

const middle = input[2]

const avg = input.reduce((acc, curr) => {return acc+curr},0)/input.length

console.log(avg)
console.log(middle)



