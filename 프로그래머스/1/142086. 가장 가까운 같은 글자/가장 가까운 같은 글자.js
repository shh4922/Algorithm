function solution(s) {
    const result = []
    const dic = {}
    for(let i=0; i<s.length; i++) {
        if(dic[s[i]] === undefined) {
            result.push(-1)
        } else {
            result.push(i - dic[s[i]]) 
        }
        dic[s[i]] = i
    }
    return result
}