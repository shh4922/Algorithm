const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";


const input = fs.readFileSync(filePath).toString().trim().split("\n")

const inputLine = []
for (let i = 1; i < input.length; i++) {
    inputLine.push(input[i].toString().trim().split(" ").map(Number))
}

const size = input[0].toString().trim().split(" ").map(Number)

const N = Number(size[0])
const M = Number(size[1])

const result = []

for (let i = 0; i < N; i++) {
    const ary = []
    for (let j = 0; j < M; j++) {
        const sum = inputLine[0 + i][j] + inputLine[N + i][j]
        ary.push(sum)
    }
    result.push(ary)
}

result.forEach((row) => {
    console.log(row.join(" "))
})

