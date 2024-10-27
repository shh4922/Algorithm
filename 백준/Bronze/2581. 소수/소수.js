const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

let result = []

for(let i= input[0]; i<=input[1]; i++) {
    if(!findSosu(i)) {
        continue
    }
    result.push(i)
    
}

if(result.length === 0) {
    console.log(-1)
} else {
    const sum = result.reduce((sum2, cur)=> {
        return sum2 += cur
    }, 0)

    console.log(sum)
    console.log(result[0])
}

function findSosu(value) {
    if(value === 1) {
        return false
    }

    let cnt = 0
    for(let i=1; i<value; i++){
        if(value%i === 0) {
            cnt++
        }
        if(cnt === 2) {
            return false
        }
    }

    return true
}


