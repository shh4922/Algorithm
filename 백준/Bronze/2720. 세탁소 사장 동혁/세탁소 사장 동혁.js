const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')


const quarter = 25
const Dime = 10
const nickel = 5
const penny = 1

const result = []
for(let i=1; i<input.length; i++) {
    const number = Number(input[i])

    const q = Math.floor(number/quarter)
    const d = Math.floor(number%quarter/Dime)
    const n = Math.floor(number%quarter%Dime/nickel )
    const p = Math.floor(number%quarter%Dime%nickel/penny)
    const ary = [q,d,n,p]
    result.push(ary)
}
result.forEach((value)=> {
    console.log(value.join(' '))
})
