function solution(l, r) {
    let result = []
    for(let i = l; i<=r; i++) {
        let str = String(i).replace(/5/g,'').replace(/0/g,'')
        if (str === '') {
            result.push(i)
        }
    }
    if (result.length === 0) {
        result.push(-1)
    }
    return result
}