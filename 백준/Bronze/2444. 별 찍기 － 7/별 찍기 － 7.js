const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = Number(fs.readFileSync(filePath).toString().trim())
const empty = ' '
const star = '*'
const ary = []
for(let i = 0; i<input*2-1; i++) {
    let emptys = ''
    let stars = ''
    if(i > input-1) {
        emptys = empty.repeat(i-input+1)
        stars = star.repeat((input*2-1)-(i-input+1)*2)
    } else {
        emptys = empty.repeat(input-i-1)
        stars = star.repeat(1+i*2)
        
    }
    str = emptys+stars
    ary.push(str)
}

ary.forEach((value)=> {
    console.log(value)
})
