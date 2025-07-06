function solution(id_list, report, k) {
    const userObj = {}
    
    // cnt: 내가 신고당한 횟수, reportUser: 신고한 유저 명단 
    id_list.forEach((value)=> {
        userObj[value] = {
            count: 0,
            reportUser: {}
        }
    })
    
    report.forEach((value) => {
        const [user, reported] = value.split(" ")
        
        // 중복신고 한게 아니면, 신고유저명 추가하고, 신고수 + 1
        if(userObj[user].reportUser[reported] === undefined) {
            userObj[user].reportUser[reported] = 0
            userObj[reported].count += 1
        }
    })
    
    
    
    // 신고처리된 유저들
    const reportedUser = []
    for(let key in userObj) {
        
        if(userObj[key].count >= k) {
            reportedUser.push(key)
        }
    }
    
    const result = new Array(id_list.length).fill(0)
    reportedUser.forEach((user)=> {
     
        let count = 0
        for(let key in userObj) {
            if(userObj[key].reportUser[user] !== undefined) {
                result[count]++
            }
            count++
        }
    })
    return result
}