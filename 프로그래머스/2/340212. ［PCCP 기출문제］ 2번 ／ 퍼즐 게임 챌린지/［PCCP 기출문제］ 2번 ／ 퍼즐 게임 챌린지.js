// time_cur : 현재퍼즐 소요시간
// time_prev: 이전퍼즐 소요시간

// diff: 현재펴즐 난이도

// level >= diff : time_cur
function cal(mid,diffs,times,limit) {
    let result = 0
    let prev_time = times[0]
    for(let i=0; i<diffs.length; i++) {
        if(mid >= diffs[i]) {
            result += times[i]
        } else {
            const curDiff = diffs[i]
            const time = (prev_time+times[i]) * (curDiff-mid) + times[i]
            result += time
        }   
        // 이전문제 풀이시간 초기화
        prev_time = times[i]
        
        // 이미 시간이 초과된경우
        if(result > limit){
            return false
        }
    }
    
    if(result > limit) {
        return false
    }
    
    return true
}

function solution(diffs, times, limit) {
    let maxLevel = 100000
    let minLevel = 1
    let currnetLevel = null
    
    
    while(minLevel<=maxLevel) {
        // 중앙값 찾기
        currnetLevel = Math.floor((maxLevel+minLevel)/2)
        console.log(maxLevel, minLevel,currnetLevel )
        // 나의 level이 낮았던경우
        if(cal(currnetLevel,diffs,times,limit)) {
            maxLevel = currnetLevel-1
        } else {
            minLevel = currnetLevel+1
        }
    }
    
    return minLevel
}




