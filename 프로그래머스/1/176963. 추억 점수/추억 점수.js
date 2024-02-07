function solution(name, yearning, photo) {
    let dic = {}
    for(let i = 0; i<name.length; i++) {
        dic[name[i]] = yearning[i]
    }
    
   return  photo.map((ary)=> {
        let sum = 0
        for(let i=0; i<ary.length; i++) {
            if(dic[ary[i]] !== undefined) {
                sum += dic[ary[i]]     
            }
            
            
        }
        return sum
    })
    
}