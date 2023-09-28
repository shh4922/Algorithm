import Foundation

func solution(_ my_string:String, _ k:Int) -> String {
    var list : [String] = []
    for _ in 0 ..< k {
        list.append(my_string)
    }
    return list.joined()
}
