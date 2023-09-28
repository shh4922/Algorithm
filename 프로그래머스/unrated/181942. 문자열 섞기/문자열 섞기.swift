import Foundation

func solution(_ str1:String, _ str2:String) -> String {
    let ary1 = str1.map { $0 }
    let ary2 = str2.map { $0 }
    var result = ""
    
    for i in 0 ..< ary1.count {
        result.append(ary1[i])
        result.append(ary2[i])
    }
    
    return result
}


