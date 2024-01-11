function solution(number) {
    let result = 0
    for(const num of number) {
        
        result += Number(num)
    
    }
    
    return result % 9;
}