func solution(_ n:Int, _ control:String) -> Int {
    var result = n
    control.forEach {
        // print($0)
        switch $0 {
        case "w":
            result += 1
        case "s":
            result -= 1
        case "d":
            result += 10
        case "a":
            result -= 10
        default:
            return
        }
    }
    return result
}