const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = Number(fs.readFileSync(filePath).toString().trim())


let number = input
let cnt = 1

// 규칙을 보면 6, 12, 18 ... 칸수가 올라갈때마다 6의배수만큼 개수가 증가.
// 1보다크면 계속해서 6, 12, 18 씩 뻄. 즉 한칸씩 이동한다는거
// break가 걸리는 시점은 1이거나 1보다 작을때임

while(number > 1) {    
    number -= (cnt*6)
    cnt += 1
}
console.log(cnt)