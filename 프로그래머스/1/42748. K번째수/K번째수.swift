import Foundation

func solution(_ array:[Int], _ commands:[[Int]]) -> [Int] {
    var answer : [Int] = []
    
    for i in commands {
        let index = array[i[0]-1 ..< i[1]].sorted()
        answer.append(index[i[2]-1])
    }
    return answer
}