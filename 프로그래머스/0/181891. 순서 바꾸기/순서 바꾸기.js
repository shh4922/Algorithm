function solution(num_list, n) {
    const ary = num_list.splice(0,n)
    
    const result = [...num_list, ...ary]
    return result
    
}