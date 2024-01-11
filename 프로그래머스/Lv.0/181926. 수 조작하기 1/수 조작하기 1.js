function solution(n, control) {
    let result = n;
    let dic = {"w":0,"s":0,"d":0,"a":0}
    for(let c of control){
        dic[c] += 1
    }
    
    result += dic['w'] 
    result -= dic['s'] 
    result += (10 * dic['d'])
    result -= (10 * dic['a']) 
    return result;
}