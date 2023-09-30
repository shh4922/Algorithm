import Foundation

func solution(_ a:Int, _ b:Int) -> Int {
    let result1 = String(a) + String(b)
    let result2 = String(b) + String(a)
    if Int(result1)! > Int(result2)! {
        return Int(result1)!
    }else{
        return Int(result2)!
    }
}