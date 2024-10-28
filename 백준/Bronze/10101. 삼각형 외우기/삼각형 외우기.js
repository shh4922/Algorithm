const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

const angles = new Set()
let sum = 0
input.forEach((value)=>{
    sum+=value
    angles.add(value)
})

if(sum !== 180) {
    console.log('Error')
} else {
    if(angles.size === 1) {
        console.log('Equilateral')
    } else if(angles.size === 2) {
        console.log('Isosceles')
    } else {
        console.log('Scalene')
    }
}

