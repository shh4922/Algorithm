import Foundation


func solution(_ price:Int, _ money:Int, _ count:Int) -> Int64{
    var sum = 0
    //cnt >= 1
    for i in 1 ... count {
        sum += price * i
    }
    if money >= sum {
        return 0
    }else{
        return Int64(sum-money)
    }
    
}
