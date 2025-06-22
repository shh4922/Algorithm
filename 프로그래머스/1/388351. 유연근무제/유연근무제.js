// startday 월1, 화2, 수3, 목4, 금5, 토6, 일7
function solution(schedules, timelogs, startday) {
    let result = 0
    let dayCount = startday
    // const dummySche = [610,659, 950, 959, 1159, 2350, 2359]
    const maxTime = getMaxTime(schedules)
    // console.log(maxTime)
    
    for(let i=0; i<timelogs.length; i++) {
        let isSuccess = true
        
        for(let j=0; j<7; j++) {
            // console.log("요일은 ",dayCount)
            if(dayCount === 6) {
                dayCount++
                continue
            }
            if(dayCount === 7) {
                dayCount = 1
                // console.log("일욜")
                continue
            }
            
            if(timelogs[i][j] > maxTime[i]) {
                isSuccess = false
                break
            }
            dayCount++
        }
        
        if(isSuccess) {
            result++
        }
        dayCount = startday
    }
    return result
}

function getMaxTime(schedule) {
    
    return schedule.map((time)=> {
        
        // 시, 분+10분 추가
        let h = Math.floor(time/100)
        let m = Math.floor(time%100)
        m+=10
        
        //60분 넘어가면 시간추가, m 수정
        if(m >= 60) {
            h+=1
            m = Math.floor(m%60)
        }
        
        // 24시 넘어가면 시 리셋, m 수정
        if(h >= 24) {
            h=6
        }
        
        return (h*100) + m
    })
}