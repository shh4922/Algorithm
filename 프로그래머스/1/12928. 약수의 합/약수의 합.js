function solution(n) {
    let result = 0
    for(let i=1; i<=Math.sqrt(n);i++) {
        if(Math.pow(i,2) === n) {
            result+=i
        }
        else if(n%i===0){
            result+=i
            result+= n/i
        }
    }
    return result;
}