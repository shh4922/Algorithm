function solution(my_string, s, e) {
    let result = ""
    
    const first = my_string.substr(0,s)
    // console.log(first)
    
    const reverse = my_string.substr(s,e-s+1).split("").reverse().join("")
    // console.log(reverse)
    
    const last = my_string.substr(e+1)
    // console.log(last)
    
    result = first + reverse + last
    
    return result
}