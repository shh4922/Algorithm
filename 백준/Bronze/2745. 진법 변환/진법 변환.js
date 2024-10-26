const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(' ')

const N = input[0].split('')
const B = Number(input[1])

const alphabetValues = {};
const value = 10;

for (let i = 0; i <26; i++) {
    const key = String.fromCharCode(65 + i); // A: 65, B:66
    alphabetValues[key] = value+i
}
/**
 * 10진법
 * 1~9
 * 
 * 11진법
 * 1~A
 * 10 => A
 * 11 => 10   // 10 => 1*A.value  // 11 -> 1*A + 2
 */


let result = 0

for(let i=0; i<N.length; i++) {
    const char = N[i]
    // 문자로 나온경우
    if(alphabetValues[`${char}`] !== undefined) { 
        result += (B ** (N.length-i-1)) *  alphabetValues[`${char}`]
        
    } else { 
        result += (B ** (N.length-i-1)) * Number(char)
    }
    
}
console.log(result)



