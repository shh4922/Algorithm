function solution(my_string, index_list) {
    let result = "";
    for (let ch of index_list) {
        result += my_string[ch]
    }
    return result;
}