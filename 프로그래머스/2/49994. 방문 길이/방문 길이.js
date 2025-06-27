function solution(dirs) {
    let moveCount = 0
    const position = {
        x:0,
        y:0
    }
    const moveRecord = {}
    
        
    dirs.split('').forEach((value)=> {
        if(value === 'U'){
            if(!isOverMax(position, 0, 1)){
                const [p1,p2] = getNewPosition(position, 0,1)
                // console.log(p1,p2)
                position.y += 1
                moveRecord[p1]=0
                moveRecord[p2]=0
            }
        } else if(value === 'D') {
            if(!isOverMax(position, 0, -1)){
                const [p1,p2] = getNewPosition(position, 0,-1)
                // console.log(p1,p2)
                position.y-=1
                moveRecord[p1]=0
                moveRecord[p2]=0
            }
        } else if(value === 'L') {
            if(!isOverMax(position, -1, 0)){
                const [p1,p2] = getNewPosition(position, -1,0)
                // console.log(p1,p2)
                position.x-=1
                moveRecord[p1]=0
                moveRecord[p2]=0
            }
        } else { // R
            if(!isOverMax(position, 1, 0)){
                const [p1,p2] = getNewPosition(position, 1,0)
                // console.log(p1,p2)
                position.x += 1
                moveRecord[p1]=0
                moveRecord[p2]=0
            }
        }
        // console.log(position)
    })
    
    
    const set = new Set()
    for(let key in moveRecord) {
        set.add(key)
    }
    
    return set.size/2
}

const isOverMax = (curPosition, x,y) => {
    const newX = curPosition.x+x
    const newY = curPosition.y+y
    if(newX > 5 || newX < -5 || newY > 5 || newY < -5) {
        return true
    }
    return false
}
const getNewPosition = (curPosition, x, y) => {
    // 0001
    // 0100
    const list = []
    const str1 = `${curPosition.x}${curPosition.y}${curPosition.x+x}${curPosition.y+y}` 
    const str2 = `${curPosition.x+x}${curPosition.y+y}${curPosition.x}${curPosition.y}`
    list.push(str1)
    list.push(str2)
    return list
}