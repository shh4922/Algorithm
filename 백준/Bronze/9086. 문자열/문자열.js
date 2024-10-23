const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const cnt = Number(input[0])

let result = []
for(let i = 1; i<=cnt; i++) {
    const start = input[i][0]
    const end = input[i][input[i].length - 1]
    result = [start,end]
    console.log(result.join(''))
}


