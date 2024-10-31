const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

const result = input.slice(1)
result.sort((a, b)=> {
    return a-b
})
result.forEach((value, index, array) => {
    console.log(value)
})



