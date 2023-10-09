import Foundation

func solution(_ sizes:[[Int]]) -> Int {
    
    var maxX = 0
    var maxY = 0
    for i in sizes {
        let data = i.sorted(by: >)
        if data[0] > maxX {
            maxX = data[0]
        }
        if data[1] > maxY{
            maxY = data[1]
        }
    }
    
    return maxX*maxY
}