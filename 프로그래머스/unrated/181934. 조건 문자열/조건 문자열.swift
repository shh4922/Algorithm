import Foundation

func solution(_ ineq:String, _ eq:String, _ n:Int, _ m:Int) -> Int {
    var result = false
    if ineq == ">" {
        if eq == "!"{
            result = n > m
        }else {
            result = n >= m
        }
    }else {
        if eq == "!"{
            result = n < m
        }else {
            result = n <= m
        }
    }
    if result {
        return 1
    }
    return 0
}
