function solution(answers) {
    let result = []
    const solution = {
        "1" : [1,2,3,4,5],
        "2": [2, 1, 2, 3, 2, 4, 2, 5],
        "3": [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }
    
    const count = {
        "1" : 0,
        "2": 0,
        "3": 0
    }
    
    for (let i = 0; i < answers.length; i++) {
        if (solution['1'][i % solution['1'].length] === answers[i]) {
            count['1'] += 1
        }
        if (solution['2'][i % solution['2'].length] === answers[i]) {
            count['2'] += 1
        }
        if (solution['3'][i % solution['3'].length] === answers[i]) {
            count['3'] += 1
        }
    }
    
    const max = Math.max(count['1'], count['2'], count['3']);
    
    for (let key in count) {
        if (count[key] === max) {
            result.push(parseInt(key))
        }
    }
    
    return result
}