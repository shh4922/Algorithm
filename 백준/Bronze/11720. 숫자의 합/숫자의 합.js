const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const cnt = Number(input[0])
const list = input[1].toString().trim().split('').map(Number)
let result = 0
for(let i=0; i<cnt; i++){
    result+=list[i]
}
console.log(result)


