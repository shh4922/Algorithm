function solution(n) {
    // 연속된 자연수니까 절반넘어가면 자기자신 이외에는 더해서 나올수가없음. 
    // 21 -> 1~11까지가 한도임. 
    // 12부터는 12+11,-> 23임.
    // 저 부분을 넘어가면 자기자신빼고는 없는거임.
    
    let result = 0
    const list = [...new Array(n)].map((_,index) =>  (index+1))
    
    let start = 0
    let sum = 0
    for(let end=0; end<=Math.floor(n/2); end++) {
        sum += list[end]
        while(sum>n) {
            sum-= list[start]
            start++
        }
        if(sum === n) {
            result +=1
        }
    }
    if(n>2) result++
    return result
}