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
    const visited = Array.from({length:M}).fill(false)
    bt(0)
    function bt(count) {
        if(result.length === M) {
            console.log(result.join(" "))
            return
        }
        for(let i=count; i<N; i++) {
            if(!visited[i]) {
                result.push(i+1)
                bt(i+1)
                visited[i] = false
                result.pop()
            }
        }
    }
}
solution()