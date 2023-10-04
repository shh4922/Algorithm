import Foundation

func solution(_ n:Int) -> Int {
    var result = 0
    for i in 2 ..< n {
        if (n-1) % i == 0{
            result = i
            break
        }
    }
    return result
}