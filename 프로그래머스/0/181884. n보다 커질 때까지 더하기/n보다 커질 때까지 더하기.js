function solution(numbers, n) {
    let result = 0
    for(let i of numbers) {
        if(result > n) {
            break
        }
        result += i
    }
    return result
}