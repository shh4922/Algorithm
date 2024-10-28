const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const n1 = Number(input[0])
let result = 0
input[1].split('').reverse().forEach((value, index)=> {
    const n = n1 * Number(value)
    console.log(n)
    result += n * (10 ** (index))
})
console.log(result)