const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)

const cnt = input / 4
const result = []
for (let i = 0; i < cnt; i++) {
    result.push('long')
}
result.push('int')

console.log(result.join(' '))
