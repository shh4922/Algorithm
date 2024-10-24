
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('')

let result = 0
for(let i=0; i<input.length; i++) {
    const value = input[i]

    if(value === 'W' || value === 'X' || value === 'Y' ||value === 'Z') {
        result+=10
    } else if(value === 'T' || value === 'U' || value === 'V') {
        result+=9
    }else if(value === 'P' || value === 'Q' || value === 'R' || value ==='S') {
        result+=8
    }else if(value === 'M' || value === 'N' || value === 'O') {
        result+=7
    }else if(value === 'J' || value === 'K' || value === 'L') {
        result+=6
    }else if(value === 'G' || value === 'H' || value === 'I') {
        result+=5
    }else if(value === 'D' || value === 'E' || value === 'F') {
        result+=4
    }else if(value === 'A' || value === 'B' || value === 'C') {
        result+=3
    }
}

console.log(result)