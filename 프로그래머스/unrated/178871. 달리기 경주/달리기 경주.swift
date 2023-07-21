import Foundation

func solution(_ players:[String], _ callings:[String]) -> [String] {
    var player = players
    var calls = callings
    var dict = [String: Int]()
    
    for i in 0..<player.count {
        dict[player[i]] = i
    }
    for i in 0..<calls.count {
        var call = calls[i]
        var idx1 = dict[call]!
        let name = player[idx1 - 1]
        player[idx1 - 1] = call
        player[idx1] = name
        dict[call]! -= 1
        dict[player[idx1]]! += 1
        
    }
    return player
}