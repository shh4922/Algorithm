function solution(n,a,b) {
    let A= a
    let B=b
    let count = 1
    while(true) {
        if(Math.ceil(A/2) !== Math.ceil(B/2)){
            A = Math.ceil(A/2)
            B = Math.ceil(B/2)
            count++
        } else {
            return count
        }
    }
    
}

// function check(a,b,count, range) {
//     if(range < 2) { return count }
//     if((a > range && b> range) || (a<= range && b <= range)) {
//         let copyCount = (count-1)
//         return check(a,b, copyCount, Math.floor(range/2))
//     } else {
//         return count
//     }
// }