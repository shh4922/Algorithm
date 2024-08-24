function solution(n, m) {
    const answer = [];

    const gongyacksu = gcd(n,m)
    const gongbesu = lcm(n,m)
    answer.push(gongyacksu)
    answer.push(gongbesu)
    
    
    return answer;

}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}