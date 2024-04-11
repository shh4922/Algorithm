function solution(arr, k) {
    const copyAry = []
    const a = Math.floor(k%2)
    if(a===1) {
        for(let value of arr) {
            copyAry.push(value*k)
        }    
    } else {
        for(let value of arr) {
            copyAry.push(value+k)
        }    
    }
    return copyAry
}