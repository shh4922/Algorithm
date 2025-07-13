function solution(people, limit) {
    people.sort((a,b)=> {
        return a-b
    })
    
    let start = 0
    let end = people.length-1
    let result = 0
    while(start<=end) {
        const sum = people[start]+people[end]
        if(sum>limit) {
            end--
        } else {
            start++
            end--
        }
        result++
    }
    return result
}