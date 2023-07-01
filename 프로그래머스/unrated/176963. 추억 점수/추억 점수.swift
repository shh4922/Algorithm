import Foundation

func solution(_ name:[String], _ yearning:[Int], _ photo:[[String]]) -> [Int] {
    var result : [Int] = []
    for i in photo{
        var sum = 0
        for j in i{
            if let index = name.firstIndex(of: j) {
                sum += yearning[index]
            }
        }
        result.append(sum)
    }
    
    return result
}
