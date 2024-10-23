const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n")

const current = input[0].toString().trim().split(" ").map(Number)
const spendTime = Number(input[1].toString().trim())

let m = current[1]+spendTime
let h = current[0]

let result = []
if(m<60) {
    result = [h, m]
} else {
    const plus = Math.floor(m/60)
    h+=plus

    if(h >= 24) {
        const cnt = Math.floor(h/24)
        result = [h-(24*cnt), m-(60*plus) ]
    } else {
        result = [h ,m-(60*plus) ]
    }
}
console.log(result.join(' '))
