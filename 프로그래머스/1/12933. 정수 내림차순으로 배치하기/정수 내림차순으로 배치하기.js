function solution(n) {
    const sort = n.toString().split('').sort((a, b) => b - a);
    const result = parseInt(sort.join(''));
    
    return result;
    
}