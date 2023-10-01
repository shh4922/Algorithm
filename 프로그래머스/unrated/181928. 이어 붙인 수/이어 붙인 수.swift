func solution(_ num_list:[Int]) -> Int {
    let hol = Int(num_list.filter { $0 % 2 == 0}.map { String($0)}.joined())!
    let jjak = Int(num_list.filter { $0 % 2 == 1}.map { String($0)}.joined())!
    
    return hol + jjak
}
