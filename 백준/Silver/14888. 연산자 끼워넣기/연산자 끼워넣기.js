const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath, 'utf-8').toString().trim().split("\n")


/**
 * 첫줄 N개수
 * 둘째, N 값들
 * 셋째 +, -, *, / 식의 개수
 *
 *
 * 체크할것
 * 1. 사용한 값인지 체크 -> 상관없음 짜피 순차적으로 수행
 *
 * 2. 연산자 사용가능한지 체크
 * 연산자(index)를 매개변수로 넘겨서 해당 인덱스의 값이있는지 체크
 *
 *
 * @type {number[]}
 */


const numList = input[1].split(" ").map(Number)
const calList = input[2].split(" ").map(Number)

// console.log(numList,calList)

function solution(cList) {


    let max = -1000000000
    let min = 1000000000

    bt(cList, numList[0],0)
    console.log(max)
    console.log(min)


    function bt(cList, preValue,cnt) {
        if(cnt === (numList.length-1)) {
            max = Math.max(preValue,max)
            min = Math.min(preValue, min)
            return
        }

        // 덧셈, 뺄셈, 곱셈 나눗셈,
        for(let c=0; c<4; c++) {

            // 연산자를 사용 가능한지 체크 0 || 1
            if(cList[c] === 0) { continue }

            // 사용가능 하다면 현재까지의 값이랑 다음 숫자를 넣어줌
            const newValue = getCalValue(preValue, numList[cnt+1], c)
            cList[c]--
            bt(cList, newValue, cnt+1)
            cList[c]++
        }
    }
}




function getCalValue(prevValue, value, index) {
    switch (index) {
        case 0:
            return prevValue+value
        case 1:
            return prevValue-value
        case 2:
            return prevValue*value
        case 3:
            // 뭐시발 d이딴 연산자 써본적이없는데 난
            return ~~(prevValue / value)

            // return Math.trunc(prevValue/value)
            // const v = Math.floor(Math.abs(prevValue)/Math.abs(value))
            // if(prevValue <0) {
            //     return v*-1
            // }
            // return v


    }
}



solution(calList)








