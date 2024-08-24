function solution(num) {
    let count = 0
    console.log(num%2)
    while(num != 1) {
        if(num%2 === 0){
            num /= 2
        } else{
            num = num*3 + 1
        } 
        count++
        if(count === 500){
            break
        }
    }
    
    if(count === 500) {
        return -1
    }
    return count
    
}