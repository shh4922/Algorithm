function solution(x) {
    let str = String(x)
    let number = 0
    for(let i=0; i<str.length; i++) {
        number += Number(str[i])
    }
    return x%number===0 
}