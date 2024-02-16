function solution(k, score) {
    let result = []
    let store = []
    for(let i=0; i<score.length; i++) {
        store.push(score[i])
        store.sort((a,b) => b-a)
        
        if(i < k) {
            result.push(store[i])
        } else {
            result.push(store[k-1])
        }
    }
    return result
}