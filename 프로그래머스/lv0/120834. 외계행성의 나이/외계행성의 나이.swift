import Foundation


func solution(_ age:Int) -> String {
    let str = String(age)
    var result = ""
    str.forEach {
        if $0 == "0"{
            result.append("a")
        }
        if $0 == "1"{
            result.append("b")
        }
        if $0 == "2"{
            result.append("c")
        }
        if $0 == "3"{
            result.append("d")
        }
        if $0 == "4"{
            result.append("e")
        }
        if $0 == "5"{
            result.append("f")
        }
        if $0 == "6"{
            result.append("g")
        }
        if $0 == "7"{
            result.append("h")
        }
        if $0 == "8"{
            result.append("i")
        }
        if $0 == "9"{
            result.append("j")
        }
            
    }
    return result
}


