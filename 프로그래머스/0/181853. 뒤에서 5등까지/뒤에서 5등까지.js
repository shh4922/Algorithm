function solution(num_list) {
    const result = num_list.sort((a,b)=> {
        return a-b
    });
    
    return result.slice(0,5)
}