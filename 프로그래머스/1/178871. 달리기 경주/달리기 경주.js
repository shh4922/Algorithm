function solution(players, callings) {
    let result = {}
    for(let i = 0; i<players.length; i++) {
        result[players[i]] = i
    }
    
    
    for(let i=0; i<callings.length; i++) {
        const value = result[callings[i]]
        const temp = players[value-1]
              
        players[value -1] = callings[i]
        players[value] = temp
        
        result[callings[i]] = value - 1
        result[temp] = value
    }
    return players
}