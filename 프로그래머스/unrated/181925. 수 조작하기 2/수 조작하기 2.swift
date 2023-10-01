func solution(_ numLog:[Int]) -> String {
    
    let dic2 = [ 1 : "w", -1:"s", 10:"d", -10: "a"]
    var result = ""
    
    for i in 1 ..< numLog.count {
        let value = numLog[i] - numLog[i - 1]
        result += dic2[value]!
    }
    return result
}
