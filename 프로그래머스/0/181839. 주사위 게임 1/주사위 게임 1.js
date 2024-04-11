function solution(a, b) {
    if(a%2 !== 1 && b%2 !==1){
        return Math.abs(a-b)
    }
    
    if(b%2 === 1 && a%2 === 1) {
        return (a*a +b*b)
    } else {
        return (a+b)*2
    }
}