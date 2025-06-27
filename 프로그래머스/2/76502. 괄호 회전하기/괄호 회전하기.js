function solution(s) {
    const copyS = s.split("")
    let result = 0
    
    for(let i=0; i<s.length; i++) {
        const stack = []
        let isTrue = true
        
        // 완전한 문자열인지 확인
        for(let j=0; j<s.length; j++) {
            const value = copyS[j]
            
            if(value === "[" || value === "(" || value === "{") {
                stack.push(value)
            } else {
                const char1 = stack.pop()
                
                if(char1 === undefined){ 
                    isTrue = false
                    break 
                }
                
                const str = `${char1}${value}`
                if(str !== '{}' && str !== '[]' && str !== '()'){ 
                    isTrue = false
                    break 
                }
            }
        }
        if (isTrue && stack.length === 0) {
            result += 1;
        }
        
        const char = copyS.splice(0,1)
        copyS.push(char[0])
    }
    return result
}