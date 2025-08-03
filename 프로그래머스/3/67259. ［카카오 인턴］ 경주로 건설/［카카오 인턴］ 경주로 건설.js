// class MinHeap {
//   constructor() {
//     this.heap = []
//   }

//   add(data) {
//     this.heap.push(data)
//     this.bubbleUp()
//   }

//   poll() {
//     if (this.heap.length === 1) return this.heap.pop()
//     const top = this.heap[0]
//     this.heap[0] = this.heap.pop()
//     this.bubbleDown()
//     return top
//   }

//   bubbleUp() {
//     let index = this.heap.length - 1
//     while (index > 0) {
//       const parentIndex = Math.floor((index - 1) / 2)
//       if (this.heap[index].cost >= this.heap[parentIndex].cost) break
//       this.swap(index, parentIndex)
//       index = parentIndex
//     }
//   }

//   bubbleDown() {
//     let index = 0
//     const length = this.heap.length

//     while (true) {
//       const left = 2 * index + 1
//       const right = 2 * index + 2
//       let smallest = index

//       if (left < length && this.heap[left].cost < this.heap[smallest].cost) {
//         smallest = left
//       }
//       if (right < length && this.heap[right].cost < this.heap[smallest].cost) {
//         smallest = right
//       }
//       if (smallest === index) break
//       this.swap(index, smallest)
//       index = smallest
//     }
//   }

//   swap(i, j) {
//     [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
//   }

//   size() {
//     return this.heap.length
//   }
// }

// function solution(board) {
//   const N = board.length
//   const dx = [0, 0, 1, -1]
//   const dy = [1, -1, 0, 0]

//   // dist[y][x][dir] = y,x까지 dir방향으로 왔을 때의 최소비용
//   const dist = Array.from({ length: N }, () =>
//     Array.from({ length: N }, () => Array(4).fill(Infinity))
//   )

//   const pq = new MinHeap()
//   for (let d = 0; d < 4; d++) {
//     dist[0][0][d] = 0
//   }

//   pq.add({ x: 0, y: 0, cost: 0, dir: -1 })

//   while (pq.size()) {
//     const { x, y, cost, dir } = pq.poll()

//     for (let i = 0; i < 4; i++) {
//       const nx = x + dx[i]
//       const ny = y + dy[i]

//       if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
//       if (board[ny][nx] === 1) continue

//       let newCost = cost + 100
//       if (dir !== -1 && dir !== i) {
//         newCost += 500 // 코너 비용
//       }

//       if (dist[ny][nx][i] > newCost) {
//         dist[ny][nx][i] = newCost
//         pq.add({ x: nx, y: ny, cost: newCost, dir: i })
//       }
//     }
//   }

//   return Math.min(...dist[N - 1][N - 1])
// }


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