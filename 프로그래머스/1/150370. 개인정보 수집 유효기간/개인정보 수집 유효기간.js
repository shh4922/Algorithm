function solution(today, terms, privacies) {
    const answer = [];
    
    const endDateObject = {}
    terms.forEach((endDate)=> {
        const date = endDate.split(" ")
        endDateObject[date[0]] = parseInt(date[1])
    })
    

    
    const todayList = today.split(".").map(item => parseInt(item))
    
    privacies.forEach((createdAndEndDate,index)=> {
        const items = createdAndEndDate.split(" ")
        const date = items[0].split('.').map(item => parseInt(item))
        
        // 유효기한
        const expireMonth = endDateObject[items[1]]
        
        date[1] += expireMonth
    
        if (date[1] > 12) {
            date[0] += Math.floor((date[1] - 1) / 12);
            date[1] = (date[1] - 1) % 12 + 1;
        }

        if (
            date[0] < todayList[0] || 
            (date[0] === todayList[0] && date[1] < todayList[1]) ||
            (date[0] === todayList[0] && date[1] === todayList[1] && date[2] <= todayList[2])
        ) {
            answer.push(index + 1);
        }
    })
    
    return answer;
}