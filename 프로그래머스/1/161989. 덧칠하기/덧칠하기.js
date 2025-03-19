function solution(n, m, section) {
    if(section.length === 1) { return 1}
    if(m === 1) { return section.length}
    
    let sum = 0
    let range = 0
    section.forEach((sectionNumber)=> {
        if(range <= sectionNumber) {
            sum++
            range = sectionNumber+m
        }
    })
    return sum
}