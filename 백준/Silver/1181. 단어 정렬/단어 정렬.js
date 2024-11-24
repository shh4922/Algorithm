const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')
input.splice(0,1)


const sorted = input.sort((a,b)=> {
    
    if(a.length !== b.length) { // 개수
        return a.length-b.length
    } else { 
        // 같으면 사전 순.
        for(let i =0; i<a.length; i++) {
            if(a[i].charCodeAt() !== b[i].charCodeAt()){
                return a[i].charCodeAt() - b[i].charCodeAt()
            }
        }
        return a.charCodeAt() - b.charCodeAt()
    }
})
const set = new Set(sorted)
console.log(Array.from(set).join('\n'))

