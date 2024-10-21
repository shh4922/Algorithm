
// const inputLine = []
// for (let i = 1; i < input.length; i++) {
//     inputLine.push(input[i].toString().trim().split(" ").map(Number))
// }

// const size = input[0].toString().trim().split(" ").map(Number)

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)
const result = []
for (let i = 1; i <= 30; i++) {
    if (input.includes(i)) {
        continue
    }
    result.push(i)
}

console.log(result.join('\n'))