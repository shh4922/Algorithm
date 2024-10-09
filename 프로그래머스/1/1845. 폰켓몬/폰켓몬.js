function solution(nums) {
    let result = 0
    const canGet = nums.length/2 
    const objs = {}
    nums.forEach((value)=> {
        if(objs[value]) {
            objs[value]+=1
        } else {
            objs[value] = 1
        }
    })
    
    const typeCnt = Object.keys(objs).length;
    
    if(typeCnt >= canGet){
       return canGet
    } 
    return typeCnt
}