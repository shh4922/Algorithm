const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)


input.forEach((value)=> {

    if(value !== -1) {
        let result = []
        let sum = 0
    
        for(let i=1; i<value; i++) {
            if(value%i ===0) {
                sum += i
                result.push(i)
            }
        }
    
        if(sum === value) {
            console.log(`${value} = ${result.join(' + ')}`)
        } else {
            console.log(`${value} is NOT perfect.`)
        }
    }
})
