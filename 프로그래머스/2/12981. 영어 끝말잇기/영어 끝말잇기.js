function solution(n, words) {
    let prevWord = ""
    
    const set = new Set()
    
    for(let i=0; i<words.length; i++) {
        const prevSetSize = set.size
        
        if(prevWord === '') {
            prevWord = words[i]       
        } else {
            const lastChar = prevWord[prevWord.length-1]
            const startChar = words[i][0]
            
            if(lastChar !== startChar) {
                // [사람번호, 사이클횟수]
                return [Math.floor(i%n)+1, Math.floor(i/n)+1]
            }
            
        }
        
        prevWord = words[i]
        set.add(words[i])
        
        if(prevSetSize === set.size) {
            return [Math.floor(i%n)+1, Math.floor(i/n)+1]
        }
    }
    return [0,0]
    
}