function solution(num_list) {
    let sum = 1
    let powSum = 0
    for(let i of num_list) {
        sum *= i
        powSum += i
    }
    
    return sum < powSum**2 ? 1 : 0
}