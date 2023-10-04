import Foundation

func solution(_ ingredient:[Int]) -> Int {
    // 1,2,3,1 순서로 나와야하네.
    var result = 0
    var ary1 : [Int] = []
    
    for i in ingredient {
        ary1.append(i)
        let last = ary1.suffix(4)
        if last == [1,2,3,1] {
            result += 1
            ary1.removeLast(4)
        }
    }
    return result
}