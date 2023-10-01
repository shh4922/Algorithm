import Foundation

func solution(_ arr:[Int], _ queries:[[Int]]) -> [Int] {
    var result = arr
    queries.forEach {
        result.swapAt($0[0], $0[1])
    }
    return result
}
