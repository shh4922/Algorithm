function solution(arr) {
    let result = []
    
    while(arr.length !== 0){
        if(result.length === 0) {
            result.push(arr[0])
            arr.shift()
        } else {
            if(result[result.length -1 ] < arr[0]) {
                result.push(arr[0])
                arr.shift()
            } else {
                result.pop()
            }
        }
    }
    return result
}