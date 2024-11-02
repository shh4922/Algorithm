const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n').slice(1).map(Number)

input.sort((a,b)=> a-b)
console.log(input.join('\n'))


