function solution(s)
{
    if(s.length % 2 === 1) {
        return 0
    }
    
    const stack =[]
    const copyS = s.split('')
    
    for(let i=0; i<s.length; i++) {
        
        const lastValue = copyS.pop()    
        stack.push(lastValue)
        
        if(stack.length >= 2) {
            const cur = stack[stack.length-1]
            const prev = stack[stack.length-2]

            if(cur === prev) {
                stack.pop()
                stack.pop()
            }
        }
    }
    
    if(stack.length === 0) {
        return 1
    }
    
    return 0
}