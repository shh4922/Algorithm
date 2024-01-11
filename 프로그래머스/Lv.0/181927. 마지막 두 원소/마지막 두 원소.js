function solution(num_list) {
    let result = num_list
    
    if (num_list[num_list.length-1] > num_list[num_list.length-2]) {
        result.push(num_list[num_list.length-1] - num_list[num_list.length-2])
    } else {
        result.push(num_list[num_list.length-1]*2)
    }
    return result
}