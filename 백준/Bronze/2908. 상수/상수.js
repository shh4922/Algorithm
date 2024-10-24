const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(' ')

const first =Number(input[0].split('').reverse().map(Number).join(''))
const second = Number(input[1].split('').reverse().map(Number).join(''))

first > second ? console.log(first) : console.log(second)