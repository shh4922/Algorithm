function solution(r1, r2) {
    let cnt = 0
    
    for(let i=1; i<=r2; i++) {
        const rDot2 = Math.floor(Math.sqrt((r2**2)-(i**2)))
        
        const rDot1 = Math.ceil(Math.sqrt((r1**2)-(i**2))) || 0    
        cnt += rDot2-rDot1 + 1
    }
    
    cnt *= 4
    
    return cnt
}
