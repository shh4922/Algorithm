class Queue {
    list=[]
    head= 0
    tail = 0
    
    add(data) {
        this.list[this.tail++] = data
    }
    
    poll() {
        if(this.head === this.tail) return null
        return this.list[this.head++]
    }
    
    size() {
        return (this.tail-this.head)
    }
}


function solution(maps) {
    
    const cur = { x : 0, y : 0 , cnt:1 }
    const end = { x:maps[0].length-1, y:maps.length-1 }
    
    
    const result = dfs(cur,end,maps)
    return result
    
}

function dfs(cur,end,maps) {
    const dx = [1,-1,0,0]
    const dy = [0,0,1,-1]
    
    const visited = maps.map(row => row.map(_ => false))
    const q = new Queue()
    
    q.add(cur)
    visited[cur.y][cur.x] = true
    
    while(q.size() !== 0) {
        const curP = q.poll()
        
        if(curP.x === end.x && curP.y === end.y) {
            
            return curP.cnt
        }
        
        for(let i=0; i<4; i++) {
            const nx = curP.x + dx[i]
            const ny = curP.y + dy[i]
            
            if(nx>=0 && ny>=0 && nx < maps[0].length && ny<maps.length) {
                if(!visited[ny][nx] && maps[ny][nx] !==0) {
                    q.add({ x: nx, y:ny, cnt: curP.cnt+1})
                    visited[ny][nx] = true
                }
            }
        }
    }
    return -1
}