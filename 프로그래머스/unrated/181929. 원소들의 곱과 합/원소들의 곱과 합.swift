import Foundation

func solution(_ num_list:[Int]) -> Int {
    var sum = 0
    var gob = 1
    num_list.forEach {
        sum += $0
        gob *= $0
    }
    
    return sum*sum > gob ? 1 : 0
}
