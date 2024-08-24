function solution(participant, completion) {
    const result = []
    const objParticipant = aryToObject(participant)
    
    completion.forEach((name)=> {
        objParticipant[name] -= 1
    })
    
    for (let key in objParticipant) {
        if(objParticipant[key] >= 1) {
            result.push(key)
        }
    }
    return result.toString()
}



function aryToObject(participant) {
    const objParticipant = {}
    
    participant.forEach((user)=>{
        if(objParticipant[user] === undefined) {
            objParticipant[user] = 1    
        } else {
            objParticipant[user] += 1
        }
    })
    return objParticipant
}