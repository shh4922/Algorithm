function solution(number, limit, power) {
    let result = 0
    let list = []
    
    for(let i=1; i <= number; i++) {
        let cnt = 0
        const max = Number((Math.sqrt(i)))
        
        for(let j=1; j<=max; j++) {
            if(i%j === 0) {
                if(j*j === i) { cnt += 1 } 
                else { cnt += 2 }
            }        
        }
        list.push(cnt)
    }
    
    for(let i of list) {
        if(i > limit) { result+= power}
        else { result += i}
    }
    
    return result
}
