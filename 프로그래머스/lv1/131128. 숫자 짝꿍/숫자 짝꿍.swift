import Foundation

func solution(_ X:String, _ Y:String) -> String {
    var dicX : [String:Int] = [:]
    var dicY : [String:Int] = [:]
    for i in X {
        if let a = dicX[String(i)]  {
            dicX[String(i)]! += 1
        }else{
            dicX[String(i)] = 1
        }
    }
    for i in Y {
        if let a = dicY[String(i)]  {
            dicY[String(i)]! += 1
        }else{
            dicY[String(i)] = 1
        }
    }

    var result = ""
    
    for i in "9876543210" {
        let minCount = min(dicX[String(i)] ?? 0, dicY[String(i)] ?? 0)
        for _ in 0 ..< minCount {
            result.append(i)
        }
    }
  
    
    
    if result.isEmpty {
        return "-1"
    }else if result.first == "0" {
        return "0"
    }else{
        return result
    }
}

