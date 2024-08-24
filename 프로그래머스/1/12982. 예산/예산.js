function solution(d, budget) {
    let value = budget
    let result = 0
    
    const sort = d.sort((a,b)=> {
        return a-b
    })
    
    for(let i=0; i<sort.length; i++) {
        if(sort[i] <= value) {
            result+=1
            value -= sort[i]
        }
    }
    return result
}