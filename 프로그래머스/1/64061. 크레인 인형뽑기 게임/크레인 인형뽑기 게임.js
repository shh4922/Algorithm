function solution(board, moves) {
    const stack = []
    let result = 0
    const copyBoard = board
    
    // 4, 3, 1, 1, 3, 2, 4
    moves.forEach((value) => {
        
        for(let i=0; i<copyBoard.length; i++) {
            if(copyBoard[i][value-1] !== 0) {
                stack.push(copyBoard[i][value-1])
                
                // console.log(value, copyBoard[i][value-1])
                copyBoard[i][value-1] = 0
                if(checkPop(stack)) {
                    result +=2
                    stack.pop()
                    stack.pop()
                }
                break
            }
            
            
        }
//         board.forEach((column)=> {
//             if(column[value-1] !== 0) {
//                 stack.push(column[value-1])
//                 column[value-1] = 0
                
//                 if(checkPop(stack)) {
                  
//                 }
//             }
//         })
    })
    return result
}

function checkPop(stack) {
    const length = stack.length-1
    
    const cur = stack[length]
    const prev = stack[length-1]
    
    if(cur === prev) {
        // console.log(cur,prev)
        return true
    }
    return false
}



// function solution(board, moves) {
//     const box = []
//     let result = 0    
    
//     for(let i=0; i<moves.length; i++) {
//         const line = moves[i]
        
//         for(let j=0; j<board.length; j++) {
//             //뽑을 위치
//             const selectedItem = board[j][line-1]
            
//             // 뽑을 위치에 아이탬이있을시
//             if(selectedItem != 0) {
                
//                 // 0개일떄 또는 같은거없을땐 else로 이동
//                 if(box[box.length-1] === selectedItem) {
//                     box.pop()
//                     result += 2
//                 } else {
//                     box.push(selectedItem)    
//                 }
//                 board[j][line-1] = 0
//                 break
//             }
//         }
//     }
    
    // return result;
// }

