import Foundation

/// a = 필요한 빈병의 개수
/// b = 주는 콜라의 개수
/// n = 가지고있는 빈 병의 개수
func solution(_ a:Int, _ b:Int, _ n:Int) -> Int {
    var cnt = n
    var result = 0
    while cnt >= a {
        result += (cnt / a) * b
        cnt = cnt % a + cnt / a * b
        if cnt == a {
            result += b
            break
        }
    }
    return result
}
