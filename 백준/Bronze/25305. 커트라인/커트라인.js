const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')


const k = input[0].split(' ').map(Number)[1]

const sortedAry = input[1].split(' ').map(Number).sort((a,b)=> a-b)

console.log(sortedAry[sortedAry.length-k])

