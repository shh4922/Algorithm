const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(' ')

const N = Number(input[0])
const B = Number(input[1])

const alphabetValues = {};

// 10~ 36 to String
for (let i = 10; i <36; i++) {
    const value = String.fromCharCode(55 + i); // A: 65, B:66
    alphabetValues[i] = value
}

let mock = N
let namege = 0
let result = []

// 목이 0이 되면 반복종료
while(mock !== 0) {
    // B로 나눈수의 나머지가 진법의 수로 들어감
    // B로 나누기때문에 나머지는 B이하의 숫자들임. alphabet에서 찾아도 32,33 이런거 고려x
    namege = Math.floor(mock%B)

    // 나머지가 10미만이면 해당숫자를 문자로 바꿔서 넣으면됌
    if(alphabetValues[`${namege}`] === undefined) {
        result.push(`${namege}`)
    } else { // 13이나, 14같은 수라면 B이하일테니까 alphabet에서 해당문자 찾으면됌
        result.push(alphabetValues[`${namege}`])
    }

    mock = Math.floor(mock/B)
}

console.log(result.reverse().join(''))