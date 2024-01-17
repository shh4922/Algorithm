function solution(q, r, code) {
    let copyAry = code.split("")
    const result = copyAry.map((value,i)=>{
        if(i % q === r) {
            return value
        }
        
    })
    return result.join("")
}