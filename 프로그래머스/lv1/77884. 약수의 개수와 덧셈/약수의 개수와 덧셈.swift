import Foundation

func solution(_ left:Int, _ right:Int) -> Int {
    var result = 0
    for i in left ... right {
        var cnt = 0
        
        for j in 1 ... Int(sqrt(Double(i))) {
            if i % j == 0 {
                if Double(j) == sqrt(Double(i)) {
                    cnt += 1
                }else{
                    cnt += 2
                }
            }
        }
        if cnt % 2 == 0 {
            result += i
        }else{
            result -= i
        }
    }
    return result
}