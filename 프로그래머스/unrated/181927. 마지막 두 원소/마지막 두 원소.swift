func solution(_ num_list:[Int]) -> [Int] {
    var result = num_list
    
    if num_list[num_list.endIndex - 1] > num_list[num_list.index(num_list.endIndex, offsetBy: -2)] {
        result.append(num_list[num_list.endIndex - 1] - num_list[num_list.index(num_list.endIndex, offsetBy: -2)])
    }else{
        result.append(num_list[num_list.endIndex - 1] * 2)
    }
    return result
}