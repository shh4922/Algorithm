
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n")


const inputKey = input[0].toString().trim().split(" ").map(Number)
const n = inputKey[0]
const m = inputKey[1]

const basket = Array.from(new Array(n), (_, i) => i + 1);

for (let i = 1; i <= m; i++) {
    const [start, end] = input[i].toString().trim().split(" ").map(Number)
    const temp = []

    for (let j = start - 1; j < end; j++) {
        temp.push(basket[j])
    }
    temp.reverse()

    basket.splice(start - 1, end - start + 1, ...temp)
}
console.log(basket.join(' '))
