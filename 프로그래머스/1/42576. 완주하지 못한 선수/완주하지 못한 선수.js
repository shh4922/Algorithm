function solution(participant, completion) {
    
    const completion1 = toHash(completion)
    
    
    for(let i=0; i<participant.length; i++) {
        const name = participant[i]
    
        if(completion1[name] === undefined) {
            return name
        }
        
        if(completion1[name] === 1){
            delete completion1[name]
        } else if(completion1[name] > 1) {
            completion1[name]--
        }
    }
    

    for(const k in completion1) {
        return k
    }
}


function toHash(userList) {
    const hash = {}
    
    userList.forEach((name)=> {
        if(hash[name] === undefined) {
            hash[name] = 1
        } else if(hash[name] >= 1) {
            hash[name]++
        }
    })
    return hash
}
