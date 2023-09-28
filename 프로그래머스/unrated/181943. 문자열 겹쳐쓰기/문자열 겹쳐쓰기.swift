import Foundation

func solution(_ my_string:String, _ overwrite_string:String, _ s:Int) -> String {
    /// 0 ~ s 까지 를 A
    /// 두번째 문자열 B
    /// B.count + s -1 까지를 C
    /// A+B+C
    let first = my_string.prefix(s)
    let last = my_string.suffix(my_string.count - overwrite_string.count - s)
    // print(first + overwrite_string + last)
    return first + overwrite_string + last
}
// print(solution("He11oWor1d","lloWorl", 2))
