function solution(my_string, m, c) {
    let result = ""
    let copyAry = my_string.split("")

    for(let i=0; i <= my_string.length / m + 1; i++) {
        let value = copyAry.splice(0,m)
        if( value[c-1] ) {
            result += value[c-1]    
        }
        
    }
    return result
}