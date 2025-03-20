function solution(keymap, targets) {
    
    const keyObject = {}
    
    keymap.forEach((keyList) => {
        for(let i=0; i<keyList.length; i++) {
            if(keyObject[keyList[i]] === undefined || keyObject[keyList[i]] > i) {
                keyObject[keyList[i]] = i
            }
        }
    })
    
    const result = []
    
    targets.forEach((keyList)=> {
        let sum = 0
        for(let i=0; i<keyList.length; i++) {
            if(keyObject[keyList[i]] === undefined) {
                result.push(-1)
                break
            }
            sum+= keyObject[keyList[i]]+1
            if(i === keyList.length-1) {
                result.push(sum)
            }
        }
    })
    return result
}
    
    // const dic = {}
    // for(let i=0; i<keymap.length; i++) {
    //     for(let j = 0; j<keymap[i].length; j++) {
    //         if(!dic[keymap[i][j]]) {
    //             dic[keymap[i][j]] = j+1     
    //         } else {
    //             if(dic[keymap[i][j]] > j+1) {
    //                 dic[keymap[i][j]] = j+1    
    //             }
    //         }
    //     }
    // }
    // let ary = []
    // for(let i=0; i<targets.length; i++) {
    //     let result = 0
    //     for(let j=0; j<targets[i].length; j++) {
    //         if(dic[targets[i][j]] ) {
    //             result += dic[targets[i][j]]
    //         } else {
    //             result = -1
    //             break
    //         }
    //     }
    //     ary.push(result)
    // }
    // return ary
    
