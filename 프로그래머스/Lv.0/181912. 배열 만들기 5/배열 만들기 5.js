function solution(intStrs, k, s, l) {
    let result = []
    intStrs.forEach((str)=> {
        let value = Number(str.substr(s,l))
        if (value > k) {
            result.push(value)
        }
    })
    return result
}