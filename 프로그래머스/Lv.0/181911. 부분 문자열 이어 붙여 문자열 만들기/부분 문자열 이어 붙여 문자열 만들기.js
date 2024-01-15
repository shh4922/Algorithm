function solution(my_strings, parts) {
    let result = ""
    for(let i = 0; i<my_strings.length; i++) {
        let subString = my_strings[i].substring(parts[i][0],parts[i][1] + 1)
        // console.log(subString)
        result += (subString)
    }
    return result
}