/**
아무리 봐도 백트래킹인데.... 
하 제일 쉬운건데 어케풀어야할지 감이 안온다
*/
function solution(k, dungeons) {
    
    let hp = k
    const visited = Array.from({length: dungeons.length}).fill(false)
    
    return bt(k, dungeons, 0, visited)
    
    
    
}

function bt(curK, dungeons, cnt, visited) {
    let curCount = cnt
    for(let i=0; i<dungeons.length; i++) {
        if(!visited[i] && curK >= dungeons[i][0]) {
            visited[i] = true
            curCount = Math.max(curCount, bt(curK-dungeons[i][1], dungeons, cnt+1, visited))
            visited[i] = false
        }
    }
    return curCount
}
