func solution(_ num_list:[Int]) -> Int {
    var sum1 = ""
    var sum2 = ""
    for i in num_list {
        if i % 2 == 0 {
            sum1 += String(i)
        }else{
            sum2 += String(i)
        }
    }
    
    return Int(sum1)! + Int(sum2)!
}