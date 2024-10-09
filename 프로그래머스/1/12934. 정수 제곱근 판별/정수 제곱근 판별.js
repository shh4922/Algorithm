function solution(n) {
    const value = Math.sqrt(n)
    
    if(value%1 === 0){
        return Math.pow(value+1,2)
    }
    return -1
}