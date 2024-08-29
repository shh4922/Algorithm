function solution(s){
    const PY = {
        'P': 0,
        'Y': 0
    }
    
    for(let i=0; i<s.length; i++) {
        PY[s[i].toUpperCase()] += 1
    }
    return PY['P'] === PY['Y'] 
    
}