func solution(_ k:Int, _ m:Int, _ score:[Int]) -> Int {
    
    var dict : [String:Int] = [:]
    
    var maxPoint = k
    
    for i in score{
        if let j = dict[String(i)] {
            dict[String(i)]! += 1
        }else{
            dict[String(i)] = 1
        }
    }
    
    
    var cnt = 0
    var result = 0
    var boxCount = score.count / m
    
    
    while true{
        if let count = dict[String(maxPoint)] {
            if count > 0 {
                dict[String(maxPoint)]! -= 1
                cnt += 1
                if cnt == m {
                    result += cnt * maxPoint
                    boxCount -= 1
                    cnt = 0
                }
            }else{
                maxPoint -= 1
            }
        }else{
            maxPoint -= 1
        }


        if boxCount == 0{
            break
        }
    }

    return result
}