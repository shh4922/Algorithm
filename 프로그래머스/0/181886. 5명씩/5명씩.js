function solution(names) {
    return names.filter((value,i)=> {
        return i % 5 === 0
    })
}