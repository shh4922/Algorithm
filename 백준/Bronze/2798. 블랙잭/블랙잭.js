const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const MAX_NUMBER = Number(input[0].split(' ')[1])
const list = input[1].split(' ').map(Number)
let max = 0

for(let i=0; i< list.length-2; i++) {
    for(let j=i+1; j <list.length-1; j++) {
        for(let k=j+1; k< list.length; k++) {
            const sum = list[i]+list[j]+list[k]
            if(sum === MAX_NUMBER) {
                max = sum
                break
            }
            else if( sum <= MAX_NUMBER && sum > max) {
                max = sum
            }
        }
    }
}

console.log(max)