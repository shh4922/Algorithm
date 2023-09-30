import Foundation

func solution(_ a:Int, _ d:Int, _ included:[Bool]) -> Int {
    var sum = 0
    for i in 0 ..< included.count {
        if included[i] {
            sum += i * d + a
        }
    }
    return sum
}
