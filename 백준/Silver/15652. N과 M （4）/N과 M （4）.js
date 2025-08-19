const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath, 'utf-8')
    .toString()
    .trim()
    .split(" ")
    .map(Number)


const N = input[0]
const M = input[1]
const output = []

function solution() {
    const result = []
    bt(0)

    function bt(count) {
        if(result.length === M) {
            output.push(result.join(" "))
            return
        }

        for(let i=count; i<N; i++) {
            result.push(i+1)
            bt(i)
            result.pop()
        }
    }
}
solution()
console.log(output.join("\n"))