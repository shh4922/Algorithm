function solution(record) {
    const nameHash = {}
    
    // 방에서 이름바꾸거나,나가서 바꿔서 들어오거나.
    
    record.forEach((value)=> {
        const str = value.split(" ")
        if(str.length > 2) {
        nameHash[str[1]] = str[2]    
        }
    })
    
    const result = []
    
    record.forEach((value)=> {
        const str = value.split(" ")
        if(str[0] !== 'Change') {
            result.push(`${nameHash[str[1]]}님이 ${toKOR(str[0])}`)    
        }
    })
    return result
}

function toKOR(str) {
    if(str === "Enter") {
        return '들어왔습니다.'
    }
    if(str === "Leave") {
        return '나갔습니다.'
    }
    return ""
}