const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = Number(fs.readFileSync(filePath).toString().trim())


let number = input
let cnt = 1

while(number > 1) {    
    number -= (cnt*6)
    cnt += 1
}
console.log(cnt)