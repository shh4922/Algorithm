const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = Number(fs.readFileSync(filePath).toString().trim())
console.log(input*4)

