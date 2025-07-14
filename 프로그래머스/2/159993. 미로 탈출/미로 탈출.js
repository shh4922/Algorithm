class Queue {
    list=[]
    
    add(data){
        this.list.push(data)
    }
    poll() {
        return this.list.shift();  // 배열이 비어 있으면 undefined
    }
    size() {
        return this.list.length
    }
    clear() {
        this.list.length = 0
    }
}

function solution(maps) {
    let start = null
    let lever = {x:-1, y:-1}
    let end = {x:-1, y:-1}
    
    const map = maps.map((value, y) => {
        return value.split("").map((v2, x)=>{
            if(v2 === 'S') {
                start = {x:x, y:y, cnt:0}
            } else if(v2 === 'L') {
                lever = {x:x, y:y, cnt:0}
            } else if(v2 === 'E') {
                end = {x:x, y:y, cnt:0}
            }
            return v2
        })
    })
    
    const leverCount = bfs(start, map, lever)
    // console.log("LCount ",leverCount)
    const exitCount = bfs(lever, map, end)
    if(leverCount === -1 || exitCount === -1) {
        return -1
    }
    return leverCount+exitCount
}

const bfs = (start, map, want) => {
    const dx = [0,0,-1,1]
    const dy = [-1,1,0,0]
    
    
    const visited = map.map(row => row.map(_ => false));
    visited[start.y][start.x] = true
    
    const q = new Queue()
    q.add(start)
    
    
    
    
    while(q.size() !== 0) {
        const curP = q.poll()
        // console.log(curP)
        if(curP.x === want.x && curP.y === want.y) {
            return curP.cnt
        }
        for(let i=0; i<4; i++){
            const nx = curP.x + dx[i]
            const ny = curP.y + dy[i]
            if(nx >=0 && ny >= 0 && nx < map[0].length && ny < map.length) {
                if(map[ny][nx] !== 'X' && !visited[ny][nx]) {
                    q.add({x:nx, y:ny, cnt:curP.cnt+1})
                    visited[ny][nx] = true
                }
            }
        }
    }
    return -1
}
