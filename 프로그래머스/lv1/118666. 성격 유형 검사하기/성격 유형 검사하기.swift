func solution(_ survey:[String], _ choices:[Int]) -> String {
    var result = ""
    var dict1 = ["R":0, "T":0, "C":0, "F":0, "J":0, "M":0, "A":0, "N":0]
    func point(str: String,point:Int) {
        if point == 4 {
            return
        }else{
            
            if point >= 5{
                //동의
                dict1[String(str.last!)]! += point - 4
            }else{
                //비동의
                dict1[String(str.first!)]! += abs(4 - point)
            }
        }
    }
    for i in 0 ..< survey.count {
        let str = survey[ survey.index(0, offsetBy: i)]
        switch str{
        case "RT", "TR":
            point(str: str, point: choices[i])
        case "CF", "FC":
            point(str: str, point: choices[i])
        case "JM", "MJ":
            point(str: str, point: choices[i])
        case "AN", "NA":
            point(str: str, point: choices[i])
        default:
            print("?")
        }
    }
    
    if dict1["R"]! >= dict1["T"]! {
        result += "R"
    }else{
        result += "T"
    }
    if dict1["C"]! >= dict1["F"]! {
        result += "C"
    }else{
        result += "F"
    }
    if dict1["J"]! >= dict1["M"]! {
        result += "J"
    }else{
        result += "M"
    }
    if dict1["A"]! >= dict1["N"]! {
        result += "A"
    }else{
        result += "N"
    }
    
    return result
    
}