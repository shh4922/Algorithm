const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath, 'utf-8')
    .toString()
    .trim()
    .split(" ")
    .map(Number)


const N = input[0]


function solution() {

    const queenList = []
    let result = 0

    bt()
    console.log(result)
    function bt() {
        if(queenList.length === N) {
            result++
            return
        }

        for(let i=0; i<N; i++) {
            if(isValidate(i)) {
                queenList.push(i)
                bt()
                queenList.pop()
            }
        }
    }

    function isValidate(row) {
        // queenList 에서 c가 col 이잖아? y 임
        // queenList[c] 가 row 잖아?     x 임

        // 즉 나는 col은 무조건 qlist.length+1 인게 고정이고, row 만 보내주면 되는거잖아

        for(let c=0; c<queenList.length; c++) {
            const r = queenList[c]
            if(r === row) return false
            if(Math.abs(queenList.length - c) === Math.abs(row-r)) return false
        }
        return true
    }

}
solution()
// console.log(output.join("\n"))