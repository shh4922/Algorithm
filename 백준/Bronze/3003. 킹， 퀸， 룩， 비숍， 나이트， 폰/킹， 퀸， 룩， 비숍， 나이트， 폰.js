const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)
let [king, queen, rook, beshop, knight, pon] = [...input]
//  킹, 퀸, 룩, 비숍, 나이트, 폰
let result = []

if(king !== 1){
    king = 1-king
}else{
    king = 0
}

if(queen !== 1){
    queen = 1-queen
}else{
    queen = 0
}
if(rook !== 2){
    rook = 2-rook
}else{
    rook = 0
}
if(beshop !== 2){
    beshop = 2-beshop
}else{
    beshop = 0
}
if(knight !== 2){
    knight = 2-knight
}else{
    knight = 0
}
if(pon !== 8){
    pon = 8-pon
}else{
    pon = 0
}
result = [king, queen, rook, beshop, knight, pon]

console.log(result.join(' '))