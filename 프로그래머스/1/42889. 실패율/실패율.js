function solution(N, stages) {
    const result = []
    let stg = stages.sort((a,b)=> {
        return a-b
    })
    // stages에서 i스테이지에 있는 사람의 수를 찾아야함.
    for(let i=1; i<=N; i++) {
        let users = 0
        for(let j=0; j<stg.length; j++){
            if(i === stg[j]) {
                users++
            }
        }
        const value =  users / stg.length
        const obj = { 
            id: i, 
            value: value
        }
        result.push(obj)
        stages.splice(0,users)
    }
    
    const sortedResult = result.sort((a,b) => {
        if (a.value === b.value) {
            return a.id - b.id;
        } else {
            return b.value - a.value;
        }
    })
    
    return sortedResult.map((value) => {
        return value.id
    });
}