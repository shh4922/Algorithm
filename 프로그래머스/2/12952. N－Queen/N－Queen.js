// 격국 한 row 당 한개의 퀸이 있어야함.
function solution(n) {
    let result = 0
    const queenRowList = []
    
    function bt(col, qCount) {
        if(qCount === n) {
            result+=1
            return
        }
        
        // col -> 세로,  i => 가로
        for(let i=0; i<n; i++) {
            if(!isVaildate(queenRowList, col, i)) continue
            
            queenRowList.push(i)
            bt(col+1, qCount+1)
            queenRowList.pop()
        }
    }
    
    bt(0,0)
    return result
}


// queenRowPositionList [1,3] => (0,1), (1,3) 퀸 있는 상태인거임
// col은 짜피 bt호출할떄 한칸씩 올려서 호출하고, row는 bt내에서 i<n 으로 돌리는 상황
function isVaildate(queenList, col, row) {
    
    for(let c=0; c<col; c++) {
        const r = queenList[c]
        if(r === row) { return false }
        if(Math.abs(r-row) === Math.abs(c-col)) { return false}
    }
    return true
}