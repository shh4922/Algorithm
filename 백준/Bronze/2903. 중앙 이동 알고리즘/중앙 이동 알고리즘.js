const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = Number(fs.readFileSync(filePath).toString().trim())

let abs = 1
for(let i=1; i<=input; i++) {
    abs = abs*4
}
console.log((Math.sqrt(abs,2)+1) **2)