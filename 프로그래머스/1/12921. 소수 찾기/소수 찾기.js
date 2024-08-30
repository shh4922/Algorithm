function solution(n) {
    let result = 0
    for(let i =2; i<=n; i++) {
        if(getSosu(i)) { result +=1}
    }
    return result;
}

function getSosu(value) {
    if(value === 2) { return true }
    if(value === 3) { return true }
    
    for(let i = 2; i <= Math.floor(Math.sqrt(value)); i++){
        if(value % i === 0){ return false;}
  }
    return true
    
    
    
}