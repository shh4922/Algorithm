import Foundation

func solution(_ numbers:[Int], _ hand:String) -> String {
    var result = ""
    
    var R_position = 10
    var L_position = 12
    
    var L_dif = 0
    var R_dif = 0
    
    for i in numbers {
        switch i {
        case 1,4,7 :
            result += "L"
            L_position = i
        case 3,6,9 :
            result += "R"
            R_position = i
        case 2,5,8,0:
            if i == 0 {
                L_dif = abs(L_position - 11)/3 + abs(L_position - 11)%3
                R_dif = abs(R_position - 11)/3 + abs(R_position - 11)%3
            }else{
                L_dif = abs(L_position - i)/3 + abs(L_position - i)%3
                R_dif = abs(R_position - i)/3 + abs(R_position - i)%3
            }
            
            if L_dif < R_dif {
                result += "L"
                L_position = i == 0 ? 11 : i
            }else if R_dif < L_dif {
                result += "R"
                R_position = i == 0 ? 11 : i
            }else{
                if hand == "right" {
                    result += "R"
                    R_position = i == 0 ? 11 : i
                }else{
                    result += "L"
                    L_position = i == 0 ? 11 : i
                }
            }
        default:
            print("??")
        }
    }
    return result
}