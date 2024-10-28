const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n')

for(let i=0; i<input.length-1; i++) {
    const [x,y,z] = input[i].split(' ').map(Number)

    const max = Math.max(x,y,z)
    
    if(2*max - (x+y+z) >= 0) {
        console.log('Invalid')
    } else {
        const list = new Set()
        list.add(x)
        list.add(y)
        list.add(z)

        if(list.size === 1) {
            console.log('Equilateral')
        } else if(list.size === 2) {
            console.log('Isosceles')
        } else {
            console.log('Scalene')
        }
    }
}