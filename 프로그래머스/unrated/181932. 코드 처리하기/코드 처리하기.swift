import Foundation

func solution(_ code:String) -> String {
    var mode = 0
    let str = code.map {return $0}
    var ret = ""
    
    for i in 0 ..< str.count {
        if mode == 0 {
            if str[i] == "1" {
                mode = 1
            }else{
                if i % 2 == 0 {
                    ret.append(str[i])
                }
            }
        }else{
            if str[i] == "1" {
                mode = 0
            }else{
                if i % 2 == 1 {
                    ret.append(str[i])
                }
            }
        }
    }
    if ret.isEmpty {
        ret = "EMPTY"
    }
    return ret
}