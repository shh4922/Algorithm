import Foundation

func solution(_ s:String) -> [Int] {
    
    var result : [Int] = []
    var dic : [String:Int] = [:]

    
    for (a,i) in s.enumerated() {
        if dic[String(i)] != nil{
            result.append(a - dic[String(i)]!)
            dic[String(i)] = a
            
        }else{
            result.append(-1)
            dic[String(i)] = a
        }
        
    }
    
    return result
}