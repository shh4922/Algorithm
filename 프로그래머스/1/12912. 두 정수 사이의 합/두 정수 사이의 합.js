function solution(a, b) {
    let sum = 0
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    while(max>=min) {
        sum+=max
        max-=1
    }
    return sum;
}