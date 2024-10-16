function solution(sides) {
    const large = Math.max(...sides)
    const small = Math.min(...sides)
    
    const n1 = large-small+1
    const n2 = large+small-1
    const result = n2-n1+1
    
    return result;
}