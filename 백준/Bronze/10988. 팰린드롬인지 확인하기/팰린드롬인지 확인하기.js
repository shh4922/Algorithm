const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim()
const reverse = input.split('').reverse().join('')

input === reverse ? console.log(1) :console.log(0)

