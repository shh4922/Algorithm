const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input =fs.readFileSync(filePath).toString().trim().split('\n')

const result = []
input.forEach((str)=> {
    const [n1, n2] = str.split(' ').map(Number)
    // 같은수인경우는 없으니, 0 0 이 아닐때만 수행
    if(n1 !== n2) {

        if(n2%n1 === 0) {
            result.push('factor')
        }else if(n1%n2 === 0) {
            result.push('multiple')
        } else {
            result.push('neither')
        }
    }
})
console.log(result.join('\n'))