function solution(players, callings) {
    const dummyUsers = {}
    players.forEach((player,index)=> {
        dummyUsers[player] = index
    })
    
    /**
    이름 불리면, 불린애앞에 애의 등수 확인
    앞애애 등수를 불린애 등수로 변경
    불린애 등수를 앞에있던애의 등수로 변경
    */
    const copyPlayers = players
    callings.forEach((callName, index)=> {
        const prevRank = dummyUsers[callName] // 불린애 등수
        const downGrageUser = copyPlayers[prevRank-1] // 앞에있던애의 이름
        
        // 결과값 변경
        copyPlayers[prevRank-1] = callName
        copyPlayers[prevRank] = downGrageUser
        
        // dummyObject value 변경
        dummyUsers[callName] = prevRank-1
        dummyUsers[downGrageUser] = prevRank
    })
    return copyPlayers

    
//     let result = {}
//     for(let i = 0; i<players.length; i++) {
//         result[players[i]] = i
//     }
    
    
//     for(let i=0; i<callings.length; i++) {
//         const value = result[callings[i]]
//         const temp = players[value-1]
              
//         players[value -1] = callings[i]
//         players[value] = temp
        
//         result[callings[i]] = value - 1
//         result[temp] = value
//     }
//     return players
}