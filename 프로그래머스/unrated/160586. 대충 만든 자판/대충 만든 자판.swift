import Foundation


func solution(_ keymap:[String], _ targets:[String]) -> [Int] {
    
    var dict = [String:Int]()
    
    var keymap = keymap.map{$0.map{String($0)}}
    
    var result = [Int]()
    
    for i in keymap{
        for j in i {
            if dict[j] == nil {
                dict[j] = i.firstIndex(of: j)!
            }else{
                dict[j] = min(dict[j]!, i.firstIndex(of: j)!)
            }
        }
    }
    
    for i in targets{
        var sum = 0
        for j in i.map{String($0)} {
            if dict[j] == nil {
                sum = -1
                break
            }else{
                sum += dict[j]! + 1
            }
        }
        result.append(sum)
    }
    
    return result
}