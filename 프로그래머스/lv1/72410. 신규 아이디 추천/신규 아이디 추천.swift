import Foundation

func solution(_ new_id:String) -> String {
    
    let blockList = "~!@#$%^&*()=+[{]}:?,<>/"
    
    //대소문자 변경 , 여백 제거
    var result = new_id.lowercased()

    //2차, 3차
    result = result
        .filter{ !blockList.contains($0)}
        .reduce(""){
            if (String($0) + String($1)).suffix(2) == ".." {
                return String($0)
            }else{
                return String($0) + String($1)
            }
        }

    
    //4차
    if result.first == "."{
        result.removeFirst()
    }else if result.last == "." {
        result.removeLast()
    }
    
//    5차
    if result.isEmpty {
        result = "a"
    }


    // 6차
    var str = result.prefix(15)
    if str.first == "."{
        str.removeFirst()
    }else if str.last == "." {
        str.removeLast()
    }
    if str.count <= 2 {
        while true {
            str = str + String(str.last!)
            if str.count >= 3 { break }
        }
    }
    return String(str)
}