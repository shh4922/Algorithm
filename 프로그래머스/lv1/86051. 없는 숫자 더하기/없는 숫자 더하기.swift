import Foundation

func solution(_ numbers:[Int]) -> Int {
    var result = 45 - numbers.reduce(0){ $0 + $1 }
    
    return result
}
