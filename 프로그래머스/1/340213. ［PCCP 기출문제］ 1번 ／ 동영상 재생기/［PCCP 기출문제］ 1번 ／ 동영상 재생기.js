// 오프닝중에 next일시, op_end + 10초
function solution(video_len, pos, op_start, op_end, commands) {
    
    const videoLength = (Number(video_len[0])*600) + (Number(video_len[1])*60) + (Number(video_len[3])*10) + Number(video_len[4])
    const start = (Number(op_start[0])*600) + (Number(op_start[1])*60) + (Number(op_start[3])*10) + Number(op_start[4])
    const end = (Number(op_end[0])*600) + (Number(op_end[1])*60) + (Number(op_end[3])*10) + Number(op_end[4])
    let curPos = (Number(pos[0])*600) + (Number(pos[1])*60) + (Number(pos[3])*10) + Number(pos[4])
    
    
    if(curPos>= start && curPos <= end) {
        curPos = end 
    }
    
    for(let i=0; i<commands.length; i++) {
        const t = commands[i] === 'next' ? 10 : -10
        curPos += t
        
        if(curPos < 0)  {
            curPos = 0
        }
        
        if(curPos >= videoLength) {
            curPos = videoLength
        }
        if(curPos>= start && curPos <= end) {
            curPos = end
        }
        
    }
    
    return changeResult(curPos)
}

function changeResult(time) {
    const m =  String(Math.floor(time/60))
    const s = String(time%60)
    return `${m.padStart(2,'0')}:${s.padStart(2,'0')}`
}


