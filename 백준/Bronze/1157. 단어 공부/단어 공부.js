const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('')

strObj = {}
input.forEach((char)=> {
    const newChar = char.toUpperCase()

    if(strObj[`${newChar}`] === undefined) {
        strObj[`${newChar}`] = 1
    } else {
        strObj[`${newChar}`] += 1
    }
})

let max = 0
let result = ''
let isSame = false

for(const i in strObj) {
    if(strObj[i] > max) {
        max = strObj[i]
        result = i
        isSame = false
    } else if(strObj[i] === max) {
        isSame = true
    }
}

if(isSame) {
    console.log('?')
} else {
    console.log(result)
}

