const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')

let result = ''

const columLength = input.length
let rowMax = 0 
input.forEach((value)=> {
    if(rowMax < value.length){
        rowMax = value.length
    } 
})

const maxCnt = Math.max(columLength,rowMax)

for(let i = 0; i<maxCnt; i++) {
    for(let j =0; j<maxCnt; j++) {
        if(input[j] && input[j][i] !== null && input[j][i] !== undefined) {
            result+=input[j][i]
        }
    }
}
console.log(result)