function solution(t, p) {
    const cnt = t.length - p.length + 1
    const Pnum = Number(p)
    
    let result = 0
    for(let i=0; i<cnt; i++) {
        let sum = ""

        for(let j=0; j<p.length; j++) {
           sum += t[i+j] 
        }

        if(Number(sum) <= Pnum) {
            result += 1
        }
    }
    return result
}