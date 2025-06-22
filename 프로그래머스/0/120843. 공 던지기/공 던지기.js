function solution(numbers, k) {

    const index = Math.floor((k-1) * 2 % numbers.length)
    return numbers[index]
}