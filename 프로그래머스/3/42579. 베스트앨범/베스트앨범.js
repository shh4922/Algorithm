function solution(genres, plays) {
    
    const playList = {}
    const totalCount = {}
    
    
    for(let i=0; i<plays.length; i++) {
        const type = genres[i]
        const count = plays[i]
        
        if(totalCount[type] === undefined) {
            playList[type] = []
            totalCount[type] = count
        } else {
            totalCount[type] += count
        }
        
        const obj2 = {
            index: i,
            cnt: count
        }
        playList[type].push(obj2)
    }
    
    const sorted = Object.keys(totalCount).sort((a,b)=> {
        return totalCount[b] - totalCount[a]
    })
    
    const result = []
    
    sorted.forEach((value) => {
        const sortPlay = playList[value].sort((a,b)=> {
            return b.cnt - a.cnt
        })
        
        for(let i=0; i<sortPlay.length; i++) {
            if(i === 2) break
            result.push(sortPlay[i].index)
        }
    })
    return result
}