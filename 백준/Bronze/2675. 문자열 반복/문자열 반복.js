const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const cnt = Number(input[0])

for(let i=1; i<=cnt; i++) {
    const ls = input[i].toString().trim().split(' ')
    const loof = Number(ls[0])
    
    const s =  ls[1]
    let result = ''
    for(let j=0; j<s.length; j++){
        result += s[j].repeat(loof)
    }
    console.log(result)
}