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
        
        const prevRank = dummyUsers[callName] // 기존 나의 랭크
        const frontUserName = copyPlayers[prevRank-1] // 나보다 앞에있는애의 이름
        
        // 더미유저의 순서 변경
        dummyUsers[callName] = prevRank-1 // 내꺼 랭크 올림
        dummyUsers[frontUserName] = prevRank // 나보다 앞애있는애를 기존나의 랭크로 보냄
        
        // 등수체크할 유저의 위치 변경
        copyPlayers[prevRank] = frontUserName // 기존 내 위치에있던 배열에 내앞에 애 이름 넣음
        copyPlayers[prevRank-1] = callName // 내앞에 있던애 위치에 내 이름 넣음
        
    })
    return copyPlayers


}