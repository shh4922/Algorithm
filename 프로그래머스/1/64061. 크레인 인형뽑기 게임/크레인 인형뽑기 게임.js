function solution(board, moves) {
    const box = []
    let result = 0    
    
    for(let i=0; i<moves.length; i++) {
        const line = moves[i]
        
        for(let j=0; j<board.length; j++) {
            //뽑을 위치
            const selectedItem = board[j][line-1]
            
            // 뽑을 위치에 아이탬이있을시
            if(selectedItem != 0) {
                if(box[box.length-1] === selectedItem) {
                    box.pop()
                    result += 2
                } else {
                    box.push(selectedItem)    
                }
                board[j][line-1] = 0
                break
            }
        }
    }
    
    
    // for(let i = 0; i<box.length-1; i++) {
    //     if (box[i] === box[i+1]) {
    //         box.splice(i, 2)
    //         result += 2
    //         i = 0
    //     }
    // }
    
    return result;
}

