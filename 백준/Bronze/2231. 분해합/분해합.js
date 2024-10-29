const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim()

const cnt = input.length
const number = Number(input)
const minValue = number-9*cnt

console.log(getSumOfBun(number, minValue))

function getSumOfBun(number, minValue) {
    for(let i=minValue; i<=number; i++) {
        let sum = i
        
        let sum2 = i
        while(sum2>0) {
            sum += Math.floor(sum2%10)
            sum2 = Math.floor(sum2/10)
        }
        
        if(sum === number) {
            return i
        }
    }
    return 0
}
