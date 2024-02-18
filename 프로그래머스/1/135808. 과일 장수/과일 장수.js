function solution(k, m, score) {
    let result = 0
    let appleBox = score.sort((a,b)=> b-a)
    for(let i=0; i<Math.floor(score.length/m); i++) {
        const box = []
        for(let j=m*i; j<(i+1)*m; j++) {
            box.push(appleBox[j])
        }
        result += Math.min(...box) * m
    }
    return result
}