import Foundation

func solution(_ lottos:[Int], _ win_nums:[Int]) -> [Int] {
    var result : [Int] = []
    var zerocnt = 0
    var cnt = 0
    var dic : [Int:Int] = [6:1, 5:2, 4:3, 3:4, 2:5, 1:6]
    
    for i in 0 ..< win_nums.count {
        if lottos[i] == 0 {
            zerocnt += 1
        }else {
            if win_nums.contains(lottos[i]) {
                cnt += 1
            }
        }
    }
    switch zerocnt + cnt {
        case 6:
            result.append(1)
        case 5:
            result.append(2)
        case 4:
            result.append(3)
        case 3:
            result.append(4)
        case 2:
            result.append(5)
        default:
            result.append(6)
    }
    switch cnt {
        case 6:
            result.append(1)
        case 5:
            result.append(2)
        case 4:
            result.append(3)
        case 3:
            result.append(4)
        case 2:
            result.append(5)
        default:
            result.append(6)
    }

    
    return result
}