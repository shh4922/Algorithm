const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const xList = []
const yList = []
for(let i=1;i<input.length;i++) {
    const [x,y] = input[i].split(' ').map(Number)
    xList.push(x)
    yList.push(y)
}
const X = Math.max(...xList)
const x = Math.min(...xList)

const Y = Math.max(...yList)
const y = Math.min(...yList)
console.log((X-x)*(Y-y))

