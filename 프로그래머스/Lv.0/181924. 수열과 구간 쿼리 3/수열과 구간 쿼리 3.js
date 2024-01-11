function solution(arr, queries) {
    let result = arr;
    for(let i = 0; i<queries.length; i++) {
        
        [result[queries[i][0]] , result[queries[i][1]]] = [result[queries[i][1]] ,result[queries[i][0]]]
        
    }
    return result
}