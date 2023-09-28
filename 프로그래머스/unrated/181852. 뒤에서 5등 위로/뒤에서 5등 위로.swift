import Foundation

func solution(_ num_list:[Int]) -> [Int] {
    let sortList = num_list.sorted(by: <)
    var list : [Int] = []
    for i in 0 ..< sortList.count {
        if i >= 5 {
            list.append(sortList[i])
        }
    }
    
    return list
}