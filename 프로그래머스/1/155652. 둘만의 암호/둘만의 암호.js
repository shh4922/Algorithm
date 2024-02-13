function solution(s, skip, index) {
    const skipDic = {}
    let result = ""
    
       
    
    for(let value of skip) {
        skipDic[value] = 1
    }
    
    for(let i=0; i<s.length; i++) {
        let cnt = 0
        let stringToasc = s[i].charCodeAt()
        while(true) {
            // z를 넘어설경우
            if(stringToasc === 122) {
                stringToasc = 96
                
            }
            
            stringToasc += 1
            const ascTostring = String.fromCharCode(stringToasc)
            
            if(skipDic[ascTostring] !== 1) {
                cnt += 1
                // console.log(ascTostring)
                if(cnt === index){ 
                    result += ascTostring
                    break 
                }
            } 
            
            
        }
    }
    return result
}