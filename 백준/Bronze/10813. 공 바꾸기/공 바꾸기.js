const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n")
const bag = input[0].toString().trim().split(" ").map(Number)
const list = []

for (let i = 1; i <= bag[0]; i++) {
    list.push(i)
}

for (let i = 1; i <= bag[1]; i++) {
    const [first = 0, second = 0] = input[i].toString().trim().split(" ").map(Number)
    const prev = list[first - 1]
    list[first - 1] = list[second - 1]
    list[second - 1] = prev

    // ?? 왜이럼?
    // [list[first - 1], list[second - 1]] = [list[second - 1], list[first - 1]];
    
}


console.log(list.join(" "))