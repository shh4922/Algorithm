// class Queue {
//     list=[]
//     head= 0
//     tail = 0
    
//     add(data) {
//         this.list[this.tail++] = data
//     }
    
//     poll() {
//         if(this.head === this.tail) return null
//         return this.list[this.head++]
//     }
    
//     size() {
//         return (this.tail-this.head)
//     }
// }


// function solution(maps) {
    
//     const cur = { x : 0, y : 0 , cnt:1 }
//     const end = { x:maps[0].length-1, y:maps.length-1 }
    
    
//     const result = dfs(cur,end,maps)
//     return result
    
// }

// function dfs(cur,end,maps) {
//     const dx = [1,-1,0,0]
//     const dy = [0,0,1,-1]
    
//     const visited = maps.map(row => row.map(_ => false))
//     const q = new Queue()
    
//     q.add(cur)
//     visited[cur.y][cur.x] = true
    
//     while(q.size() !== 0) {
//         const curP = q.poll()
        
//         if(curP.x === end.x && curP.y === end.y) {
            
//             return curP.cnt
//         }
        
//         for(let i=0; i<4; i++) {
//             const nx = curP.x + dx[i]
//             const ny = curP.y + dy[i]
            
//             if(nx>=0 && ny>=0 && nx < maps[0].length && ny<maps.length) {
//                 if(!visited[ny][nx] && maps[ny][nx] !==0) {
//                     q.add({ x: nx, y:ny, cnt: curP.cnt+1})
//                     visited[ny][nx] = true
//                 }
//             }
//         }
//     }
//     return -1
// }

class Queue {
    list=[]
    front=0
    rear=0
    
    push(item) {
        this.list.push(item)
        this.rear++
    }
    pop() {
        return this.list[this.front++]
    }
    isEmpty() {
        return this.front === this.rear
    }
    size() {
        return this.rear - this.front
    }
}

function solution(maps) {
    const start = {x:0, y:0, cnt:1}
    const end = {x:maps[0].length-1, y:maps.length-1}
    const dx = [1,-1,0,0]
    const dy = [0,0,1,-1]
    const visited = maps.map(row => row.map(_ => false))
    
    const queue = new Queue()
    queue.push(start)
    visited[0][0] = true
    
    while(queue.size() !== 0) {
        const curP = queue.pop()
        if(curP.x === end.x && curP.y === end.y) {
            return curP.cnt
        } 
        
        for(let i=0; i<4; i++) {
            const newX = curP.x+ dx[i]
            const newY = curP.y+ dy[i]
            
            if(newX < 0 || newX > end.x || newY < 0 || newY > end.y) continue
            if(visited[newY][newX]) continue
            if(maps[newY][newX] === 0) continue
            
            
            
            visited[newY][newX] = true
            queue.push({
                x:newX,
                y:newY,
                cnt:(curP.cnt+1)
            })
        }
    }
    return -1
}