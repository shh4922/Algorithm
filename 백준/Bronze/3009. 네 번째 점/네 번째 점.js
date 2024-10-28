const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const xSet = new Set()
const ySet = new Set()

input.forEach((str)=> {
    const [x, y] = str.split(' ').map(Number)
    if(xSet.has(x)) {
        xSet.delete(x)
    }else {
        xSet.add(x)
    }
    if(ySet.has(y)) {
        ySet.delete(y)
    }else {
        ySet.add(y)
    }
})
const result = [...xSet , ...ySet]
console.log(result.join(' '))