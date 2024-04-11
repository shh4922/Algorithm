function solution(str_list, ex) {
    let result = ""
    const size = ex.length
    
    for(let str of str_list) {
        if(str.indexOf(ex) === -1) {
            result += str
        }
    }
    return result
}