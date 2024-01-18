function solution(arr, intervals) {
    let result = []
    intervals.forEach(([a,b]) => {
        const ary = arr.slice(a,b+1)
        for(let value of ary) {
            result.push(value)
        }
    })
    return result
}