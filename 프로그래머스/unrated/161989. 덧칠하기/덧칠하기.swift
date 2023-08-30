import Foundation

func solution(_ n:Int, _ m:Int, _ section:[Int]) -> Int {
    
    var result = 0
    var pre = 0
    
    for i in 0 ..< section.count {
        if i == 0 {
            result += 1
            pre = section[i]
        }else{
            if pre + m <= section[i] {
                result += 1
                pre = section[i]
            }
        }
        
    }
    return result
}