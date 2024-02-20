function solution(ingredient) {
    const ary = []
    let result = 0
    
    for(let i = 0; i<ingredient.length; i++) {
        ary.push(ingredient[i])
        
        const value = ary.slice(-4).join("")
        
        if(value === "1231"){
            result += 1
            ary.splice(-4,4)
        }
    }
    
    return result
    
    
}