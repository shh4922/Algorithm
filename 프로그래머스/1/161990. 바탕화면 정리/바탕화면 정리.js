function solution(wallpaper) {
    // index = y
    const xList = []
    const yList = []
    wallpaper.forEach((items, y)=> {
        
        for(let i=0; i<items.length; i++) {
            if(items[i] === '#') {
                yList.push(y)
                xList.push(i)
            }
        }
        
    })
    
    const xMax = Math.max(...xList)
    const xMin = Math.min(...xList)
    const yMax = Math.max(...yList)
    const yMin = Math.min(...yList)
    const result = []
    result.push(yMin)
    result.push(xMin)
    result.push(yMax+1)
    result.push(xMax+1)
    return result
}