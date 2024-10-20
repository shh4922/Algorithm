function solution(sequence, k) {
    let sum = sequence[0]
    let start = 0
    let end = 0
    
    let prevLength = null
    let result = []
    
    while(start<=end && end<sequence.length) {
        if(sum === k) {
            if(prevLength > end-start || prevLength === null) {
                result = [start, end]
                prevLength = end-start
            }
            end++
            sum+=sequence[end]
        }
        else if(sum < k) {
            end++
            sum+=sequence[end]
        }
        else if(sum > k) {
            sum -= sequence[start]
            start++
        }
    }
    return result
}