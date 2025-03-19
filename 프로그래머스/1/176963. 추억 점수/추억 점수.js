function solution(name, yearning, photo) {
//     let dic = {}
//     for(let i = 0; i<name.length; i++) {
//         dic[name[i]] = yearning[i]
//     }
    
//    return  photo.map((ary)=> {
//         let sum = 0
//         for(let i=0; i<ary.length; i++) {
//             if(dic[ary[i]] !== undefined) {
//                 sum += dic[ary[i]]     
//             }
            
            
//         }
//         return sum
//     })
    
    const namePoint = {}
    let sum = 0
    const result = []
    name.forEach((userName, index)=> {
        namePoint[userName] = yearning[index]
    })
    
    photo.forEach((userList)=> {
        userList.forEach((user)=>{
            if(namePoint[user] === undefined) { return }
            sum+= namePoint[user]
        })
        result.push(sum)
        sum = 0
    })
    return result
}