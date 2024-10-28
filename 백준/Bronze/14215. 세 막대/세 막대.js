const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number).sort((a,b)=> {
    return a-b
})

const last = input[0] + input[1] -1

if(last > input[2]) {
    console.log(input[0] + input[1] + input[2])
}else {
    console.log(last+input[0] + input[1])
}



