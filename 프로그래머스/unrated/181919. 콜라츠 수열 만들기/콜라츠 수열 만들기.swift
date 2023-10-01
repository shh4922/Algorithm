func solution(_ n:Int) -> [Int] {
    var result : [Int] = []
    var i = n
    result.append(i)
    while i != 1{
        if i % 2 == 0 {
            i = i/2
        }
        else { i = 3*i + 1}
        result.append(i)
    }
    return result
}