import Foundation

func solution(_ number:Int, _ limit:Int, _ power:Int) -> Int {
    let list = [Int](1 ... number)
    var result = 0
    
    // i = 1,2,3,4,5,6,7,8,9,10
    for i in list {
        var cnt = 0
        for j in 1 ... Int(sqrt(Double(i))) {
            if i % j == 0 {
                if j*j == i {
                    cnt += 1
                }else{
                    cnt += 2
                }
            }
        }
        result += cnt <= limit ? cnt : power
    }
    

    return result
}