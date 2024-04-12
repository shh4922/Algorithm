function solution(myString) {
    const ary = myString.split("x")
    return ary.map((a)=> {
        return a.length
    })
}