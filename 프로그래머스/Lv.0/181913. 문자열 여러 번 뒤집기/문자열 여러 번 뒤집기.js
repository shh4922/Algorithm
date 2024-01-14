function solution(my_string, queries) {
    let result = my_string.split("")
    
    queries.forEach(([a,b]) => {    
        let substring = result.join("").substring(a,b+1).split("")
        
        for(let i = a; i <= b; i++) {
            result[i] = substring[substring.length - 1]
            substring.pop()
              
        }
        
    })
    return result.join("")
}