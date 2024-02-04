function solution(num_list) {
    let result = 0
    for(let value of num_list) {
        let data = value
        while(data != 1) {
            if(data%2 ===0){
                data /= 2
            } else {
                data = (data-1)/2
            }
            result++
        }
    }
    return result
}