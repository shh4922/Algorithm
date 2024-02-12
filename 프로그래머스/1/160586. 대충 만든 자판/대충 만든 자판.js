function solution(keymap, targets) {
    const dic = {}
    for(let i=0; i<keymap.length; i++) {
        for(let j = 0; j<keymap[i].length; j++) {
            if(!dic[keymap[i][j]]) {
                dic[keymap[i][j]] = j+1     
            } else {
                if(dic[keymap[i][j]] > j+1) {
                    dic[keymap[i][j]] = j+1    
                }
            }
        }
    }
    let ary = []
    for(let i=0; i<targets.length; i++) {
        let result = 0
        for(let j=0; j<targets[i].length; j++) {
            if(dic[targets[i][j]] ) {
                result += dic[targets[i][j]]
            } else {
                result = -1
                break
            }
        }
        ary.push(result)
    }
    return ary
    
}