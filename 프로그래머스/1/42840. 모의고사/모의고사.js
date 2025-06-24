function solution(answers) {
    const one = [1,2,3,4,5]
    const two = [2,1,2,3,2,4,2,5]
    const three = [3,3,1,1,2,2,4,4,5,5]
    
    const sum = [0,0,0]
    
    answers.forEach((answer, index) => {
        const oneIndex = Math.floor(index%(one.length))
        const twoIndex = Math.floor(index%(two.length))
        const threeIndex = Math.floor(index%(three.length))
        
        if(one[oneIndex] === answer) {
            sum[0] +=1
        }
        if(two[twoIndex] === answer) {
            sum[1] +=1
        }
        if(three[threeIndex] === answer) {
            sum[2] +=1
        }
    })
    
    const maxValue = Math.max(...sum)
    const result = []
    for(let i=0; i<3; i++) {
        if(sum[i] === maxValue) {
            result.push(i+1)
        }
    }
    return result
    
}