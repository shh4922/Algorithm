const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const numbers = input[1].split(' ').map(Number)
let result = 0
numbers.forEach((value)=> {
    let cnt = 0

    if(value !== 1) {
        for(let i=1; i<value; i++) {
            if(value%i === 0) {
                cnt++
            }
            if(cnt >=2 ) {
                break
            }
        }
        if(cnt === 1){
            result++
        }
    }
})
console.log(result)