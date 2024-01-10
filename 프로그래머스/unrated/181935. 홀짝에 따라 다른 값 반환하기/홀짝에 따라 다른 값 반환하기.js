function solution(n) {
    let result = 0
    if (n%2 === 0) {
        for(n; n>0; n = n-2) {
            result += n*n
        }
    } else {
        for (n; n>0; n = n-2) {
            result += n
        }
    }
    return result;
}