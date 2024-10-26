const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')

let sum = 0 // 총합
let sumOfStudyPoint = 0 //학점

input.forEach((str) => {
    const study = str.trim().split(' ')
    if (study[2] !== 'P') {
        const point = getPoint(study[2]) //내가받은 과목점수
        const avgPoint = Number(study[1]) // 학점
        
        sum += point*avgPoint
        sumOfStudyPoint += avgPoint
    }
})
console.log((sum/sumOfStudyPoint).toFixed(6))

function getPoint(grade) {
    switch (grade) {
        case 'A+':
            return 4.5;
        case 'A0':
            return 4.0;
        case 'B+':
            return 3.5;
        case 'B0':
            return 3.0;
        case 'C+':
            return 2.5;
        case 'C0':
            return 2;
        case 'D+':
            return 1.5;
        case 'D0':
            return 1.0;
        default:
            return 0
    }
}