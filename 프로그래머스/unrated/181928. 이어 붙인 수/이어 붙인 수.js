function solution(num_list) {
    let hol = ""
    let jjank = ""
    for(let i of num_list) {
        i%2 === 0 ? jjank += String(i) : hol += String(i)
    }
    return Number(hol) + Number(jjank)
}