function solution(want, number, discount) {
    let result = 0
    const wantObj = {}
    want.forEach((value,index)=> {
        wantObj[value] = number[index]
    })
    
    
    const maxDay = discount.length - 10
    
    for(let i=0; i<=maxDay; i++) {
        const discountObj = getDiscountObj(i,discount)
        
        let isClear = true
        for(const key in wantObj) {
            if(discountObj[key] === undefined || wantObj[key] > discountObj[key]) {
                isClear = false
                break
            }
        }
        
        if(isClear) {
            result++
        }
    }
    return result
}



function getDiscountObj(startDay,discountList) {
    const discountObj = {}
    
    for(let i=startDay; i<startDay+10; i++) {
        const value = discountList[i]
        if(discountObj[value] === undefined) {
            discountObj[value] = 1
        } else {
            discountObj[value]++
        }
    }
    return discountObj
}