const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";


const input = fs.readFileSync(filePath).toString().trim().split("\n")

const ary = input[1].toString().trim().split(" ").map(Number)
const n = Number(input[2])

let result = 0

ary.forEach(element => {
    if (element === n) {
        result++
    }
});

console.log(result)