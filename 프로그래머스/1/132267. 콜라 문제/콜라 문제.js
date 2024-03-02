function solution(a, b, n) {
    let result = 0
    
    while(n>=a) {
        if(n < a){
            break
        }
        result += Math.floor(n/a)*b
        
        n = Math.floor(n/a)*b + Math.floor(n%a)


    }
    return result
}