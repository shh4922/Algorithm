function solution(n, m, section) {
    
    if(m === 1) {
        return section.length
    }
    
    let result = 1
    
    let first = section[0]
    
    for(let i = 0; i<section.length; i++) {
        if(first+m <= section[i]) {
            result+=1
            first = section[i]
        }
    }
    return result
    
}