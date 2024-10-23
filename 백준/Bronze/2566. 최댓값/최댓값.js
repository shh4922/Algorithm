const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')


let M = 0;
const arr = [];
input.forEach((i) => {
    i = i.split(' ').map(a=>Number(a));
    M = i.length;
    arr.push(...i);
});

const max = Math.max(...arr);
const index = arr.indexOf(max);
console.log(max)
console.log(Math.floor(index/M) +1 , index%M +1);