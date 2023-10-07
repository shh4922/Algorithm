import Foundation

func solution(_ s:String) -> Int {
    let result1 = s.replacingOccurrences(of: "one", with: "1")
    let result2 = result1.replacingOccurrences(of: "two", with: "2")
    let result3 = result2.replacingOccurrences(of: "three", with: "3")
    let result4 = result3.replacingOccurrences(of: "four", with: "4")
    let result5 = result4.replacingOccurrences(of: "five", with: "5")
    let result6 = result5.replacingOccurrences(of: "six", with: "6")
    let result7 = result6.replacingOccurrences(of: "seven", with: "7")
    let result8 = result7.replacingOccurrences(of: "eight", with: "8")
    let result9 = result8.replacingOccurrences(of: "nine", with: "9")
    let result = result9.replacingOccurrences(of: "zero", with: "0")
    
    return Int(result)!
}