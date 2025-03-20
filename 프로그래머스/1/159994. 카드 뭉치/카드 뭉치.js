function solution(cards1, cards2, goal) {
    let wordLength = goal.length
    
    goal.forEach((word)=> {
        if(cards1[0] !== undefined && cards1[0] === word) {
            cards1.splice(0,1)
            wordLength--
        }else if(cards2[0] !== undefined && cards2[0] === word) {
            cards2.splice(0,1)
            wordLength--
        }
    })
    if(wordLength === 0) {
        return "Yes"    
    } else {
        return "No" 
    }
    
}