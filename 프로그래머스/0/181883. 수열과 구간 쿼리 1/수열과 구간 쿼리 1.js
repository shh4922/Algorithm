function solution(arr, queries) {
    let result = arr
    for(let i = 0; i<queries.length; i++) {
        for(let j = queries[i][0]; j<=queries[i][1]; j++) {
            result[j] += 1
        }
    }
    return result
}