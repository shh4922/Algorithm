import Foundation

func solution(_ a:[Int], _ b:[Int]) -> Int {
    var result = 0
    for i in 0 ..< a.count {
        result += a[i] * b[i]
    }
    return result
}

func solution2(_ a:[Int], _ b:[Int]) -> Int {
    let result = zip(a,b).reduce(0){ $0 + ($1.0 * $1.1)}
    return result
}

