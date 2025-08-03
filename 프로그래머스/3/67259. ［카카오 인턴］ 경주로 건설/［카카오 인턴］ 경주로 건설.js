
class Queue {
    list = []
    
    add(data) {
        this.list.push(data)
    }
    
    poll() {
        return this.list.shift()
    }
    
    size() {
        return this.list.length
    }
}

// 가중치가 포함된 최단경로
// 다익스트라 아님?

// 이전에 h행 이동인지, v행 이동인지를 체크해야함.

function solution(board) {
    const N = board.length
    // const visited = Array.from({ length: N }, 
    //                         () =>Array.from({ length: N }, 
    //                                         () =>[false, false]))
    
    // 0-> H, 1 => v
    // [가로(h), 세로(v)] 각각의 비용
    const dist = Array.from({ length: N }, 
                            () =>Array.from({ length: N }, 
                                            () =>[Infinity, Infinity]));
    
    
    const q = new Queue()
    const start = {x:0, y:0, prevVH:-1, dist:0}
    const end = {x:N-1, y:N-1}
    
    q.add(start)
    dist[0][0][0] = 0
    dist[0][0][1] = 0

//     visited[0][0][0] = true
//     visited[0][0][1] = true
    
    
    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]
    
    while(q.size() !== 0) {
        const curP = q.poll()
        
        for(let i=0; i<4; i++) {
            const nx = dx[i]+curP.x
            const ny = dy[i]+curP.y
            const prevMove = curP.prevVH
            
            const moveP = dy[i] === 0 ? 0 : 1 // 가로이동 세로이동 체크
            if(nx < 0 || nx >= N || ny < 0 || ny >= N) continue    // 다음위치가 범위를 벗어나면 continue
            if(board[ny][nx] === 1)             continue    // 벽이여도 continue
            
            
            
            
            let cost = (curP.dist + 100)
            if(curP.prevVH !== -1) {
                if(moveP !== prevMove) {
                    cost+=500
                }
            }
            
            
            if(dist[ny][nx][moveP] > cost) {
                dist[ny][nx][moveP] = cost
                
                
                const position = {x:nx, y:ny, prevVH:moveP, dist:cost}
                q.add(position)
                // console.log(dist)
            }
        }
    }
    // console.log(dist[N-1][N-1][0])
    // console.log(dist[N-1][N-1][1])
    return Math.min(...[dist[N-1][N-1][0], dist[N-1][N-1][1]])
}