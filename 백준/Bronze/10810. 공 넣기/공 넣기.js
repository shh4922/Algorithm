const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n")


const inputKey = input[0].toString().trim().split(" ").map(Number)
const n = inputKey[0]
const m = inputKey[1]

const basket = Array.from(new Array(n), (_, i) => 0);

for (let i = 1; i <= m; i++) {
    const value = input[i].toString().trim().split(" ").map(Number)

    const temp = Array.from(new Array(value[1] - value[0] + 1), (_, i) => value[2]);
    basket.splice(value[0] - 1, value[1] - value[0] + 1, ...temp)
}
console.log(basket.join(' '))

