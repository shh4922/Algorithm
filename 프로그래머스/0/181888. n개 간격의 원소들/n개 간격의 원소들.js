function solution(num_list, n) {
    let result = []
    return num_list.filter((_,i) => {
        return i%n === 0
    })
}