function solution(N, stages) {
    const stageUser = {}
    let totalUser = stages.length
    
    stages.forEach((stage) => {
        if(stageUser[stage] === undefined) {
            stageUser[stage] = 1
        } else {
            stageUser[stage] += 1
        }
    })
    
    const failRate = new Array(N).fill(0)
    
    for(const key in stageUser) {        
        if(Number(key) <= N) {
            const fail = stageUser[key]/totalUser
            failRate[Number(key)-1] = fail
        }
        
        totalUser -= Number(stageUser[key])
    }
    
    const obj = {}
    failRate.forEach((rate,index) => {
        obj[index+1] = rate
    })
    

    // console.log(Object.entries(obj))
    const result = Object.entries(obj).sort((a,b)=> {
        return b[1]-a[1]
    })
    // console.log(result)
    return result.map((a,index)=> {
        return Number(a[0])
    })
    // console.log(failRate)
    
}