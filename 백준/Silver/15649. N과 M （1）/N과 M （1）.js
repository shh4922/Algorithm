const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath, 'utf-8')
    .toString()
    .trim()
    .split(" ")
    .map(Number)


const N = input[0]
const M = input[1]


function solution() {
    const result = []
    bt(0)
    function bt(count) {
        if(result.length === M) {
            console.log(result.join(" "))
            return
        }
        for(let i=0; i<N; i++) {
            if(!result.includes(i+1)) {
                result.push(i+1)
                bt(result.length)
                result.pop()
            }
        }
    }
}
solution()