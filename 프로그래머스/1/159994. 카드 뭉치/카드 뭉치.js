function solution(cards1, cards2, goal) {
    
    let cnt1 = cards1.length
    let cnt2 = cards2.length
    let result = goal.length
    
    goal.forEach((value) => {
        if(cnt1 !== 0 && value === cards1[cards1.length-cnt1]) {
            cnt1--
            result--
        } else if (cnt2 !== 0 && value === cards2[cards2.length-cnt2]) {
            cnt2--
            result--
        }
    })
    
    if(result === 0) {
        return "Yes"
    }else {
        return "No"
    }
}