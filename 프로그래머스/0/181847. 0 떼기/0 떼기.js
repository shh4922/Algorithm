function solution(n_str) {
    let result = n_str
    for(let i=0; i < n_str.length; i++){
        if(n_str[i] !== '0'){
            result = n_str.substr(i)
            break
        }
        
    }
    return result
    
}