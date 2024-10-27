const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')

let drawPaper = Array.from(Array(100), () => Array(100).fill(0))
let size = 0
for(let i=1; i<input.length; i++) {
    const list = input[i].split(' ').map(Number)

    for(let j=list[0]; j<list[0]+10; j++) {
        for(let k=list[1]; k<list[1]+10; k++) {
            if(drawPaper[j][k] === 1) continue
            drawPaper[j][k] = 1
            size++
        }
    }
}
console.log(size)