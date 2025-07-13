function solution(sequence, k) {
    let start = 0
    let sum = 0
    let result = []
    for(let end=0; end<sequence.length; end++) {
        sum+= sequence[end]
        while(sum>k) {
            sum -= sequence[start]
            start++
        }
        
        if(sum === k) {
            if(result.length === 0 ){
                result = [start, end]
            }else {
                const prev = result[1]-result[0]
                const cur = end-start
                if(cur<prev) {
                    result = [start, end]
                }
            }
        }
    }
    return result
}