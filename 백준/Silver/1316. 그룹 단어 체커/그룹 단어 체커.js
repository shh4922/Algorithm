const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')

let obj = {}
let result = 0

// 이전에 나온 단어인지 판단.
// 없던 단어일시 obj에 추가
// 있던단어일시 이전단어와 비교
for(let i=1; i<input.length; i++) {
    obj = {}
    let isTrue = true
    const str =input[i].split('')

    for(let j=0; j<str.length; j++) {
        const char = str[j]

        if(j === 0) {
            obj[`${char}`] = 1
        } else {
            // 없던단어 판단
            if(obj[`${char}`] === undefined) {
                obj[`${char}`] = 1
            } else {
                // 이전단어와 다를때
                if(char !== str[j-1]) {
                    isTrue = false
                    break
                } 
            }
        }
    }

    if(isTrue) result++
}
console.log(result)