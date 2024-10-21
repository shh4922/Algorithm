
// const inputLine = []
// for (let i = 1; i < input.length; i++) {
//     inputLine.push(input[i].toString().trim().split(" ").map(Number))
// }

// const size = input[0].toString().trim().split(" ").map(Number)

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number)

const [first, middle, end] = input
if (first === middle && first === end && middle === end) {
    console.log(10000 + first * 1000)
} else if (first !== middle && middle !== end && first !== end) {
    const max = Math.max(first, middle, end)
    console.log(max * 100)
} else {
    if (first === middle) {
        console.log(1000 + first * 100)
    } else {
        console.log(1000 + end * 100)
    }


}

