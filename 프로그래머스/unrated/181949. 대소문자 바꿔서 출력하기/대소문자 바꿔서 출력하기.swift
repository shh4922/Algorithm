import Foundation

var result = ""
if let s1 = readLine() {
    s1.forEach {
        if $0.asciiValue! >= 97 {
            result.append($0.uppercased())
        }else{
            result.append($0.lowercased())
        }
    }
    print(result)
}


