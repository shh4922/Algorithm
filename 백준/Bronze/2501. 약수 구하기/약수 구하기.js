
// const inputLine = []
// for (let i = 1; i < input.length; i++) {
//     inputLine.push(input[i].toString().trim().split(" ").map(Number))
// }

// const size = input[0].toString().trim().split(" ").map(Number)

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ")


const n = Number(input[0])
const k = Number(input[1])



const ary = []

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        ary.push(i);
    }
}
// for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//         ary.push(i)
//         if (i !== Math.sqrt(n)) {
//             ary.push(n / i)
//         }
//     }

// }
// ary.sort((a, b) => {
//     return a - b
// })

if (ary.length < k) {
    console.log(0);
} else {
    console.log(ary[k - 1]);
}

