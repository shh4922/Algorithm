const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = Number(fs.readFileSync(filePath).toString().trim())

let mock = input
let cnt = 0

let result = 0
while(true) {
    if((mock - 3*cnt)%5 === 0) {
        result += cnt
        result += (mock - 3*cnt)/5
        console.log(result)
        break
    } else {
        cnt++
    }

    if(cnt*3 > mock) {
        console.log(-1)
        break
    }


}

