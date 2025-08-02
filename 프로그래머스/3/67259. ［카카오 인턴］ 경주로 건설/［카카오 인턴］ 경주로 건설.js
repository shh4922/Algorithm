class MinHeap {
  constructor() {
    this.heap = []
  }

  add(data) {
    this.heap.push(data)
    this.bubbleUp()
  }

  poll() {
    if (this.heap.length === 1) return this.heap.pop()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown()
    return top
  }

  bubbleUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[index].cost >= this.heap[parentIndex].cost) break
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  bubbleDown() {
    let index = 0
    const length = this.heap.length

    while (true) {
      const left = 2 * index + 1
      const right = 2 * index + 2
      let smallest = index

      if (left < length && this.heap[left].cost < this.heap[smallest].cost) {
        smallest = left
      }
      if (right < length && this.heap[right].cost < this.heap[smallest].cost) {
        smallest = right
      }
      if (smallest === index) break
      this.swap(index, smallest)
      index = smallest
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  size() {
    return this.heap.length
  }
}

function solution(board) {
  const N = board.length
  const dx = [0, 0, 1, -1]
  const dy = [1, -1, 0, 0]

  // dist[y][x][dir] = y,x까지 dir방향으로 왔을 때의 최소비용
  const dist = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(4).fill(Infinity))
  )

  const pq = new MinHeap()
  for (let d = 0; d < 4; d++) {
    dist[0][0][d] = 0
  }

  pq.add({ x: 0, y: 0, cost: 0, dir: -1 })

  while (pq.size()) {
    const { x, y, cost, dir } = pq.poll()

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]

      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
      if (board[ny][nx] === 1) continue

      let newCost = cost + 100
      if (dir !== -1 && dir !== i) {
        newCost += 500 // 코너 비용
      }

      if (dist[ny][nx][i] > newCost) {
        dist[ny][nx][i] = newCost
        pq.add({ x: nx, y: ny, cost: newCost, dir: i })
      }
    }
  }

  return Math.min(...dist[N - 1][N - 1])
}


// class Queue {
//     list = []
    
//     add(data) {
//         this.list.push(data)
//     }
    
//     poll() {
//         return this.list.shift()
//     }
    
//     size() {
//         return this.list.length
//     }
// }

// // 가중치가 포함된 최단경로
// // 다익스트라 아님?

// // 이전에 h행 이동인지, v행 이동인지를 체크해야함.

// function solution(board) {
//     const N = board.length
//     // const visited = Array.from({length:N},() => Array(N).fill(false))
//     const dist = Array.from({length:N},() => Array(N).fill(Infinity))
    
//     const q = new Queue()
//     const start = {x:0, y:0, prevVH:null, dist:0}
//     const end = {x:N-1, y:N-1}
    
//     q.add(start)
//     dist[0][0] = 0
//     // visited[0][0] = true
    
    
//     const dx = [1, -1, 0, 0]
//     const dy = [0, 0, 1, -1]
    
//     while(q.size() !== 0) {
//         const curP = q.poll()
        
        
//         for(let i=0; i<4; i++) {
//             const nx = dx[i]+curP.x
//             const ny = dy[i]+curP.y
        
//             if(nx < 0 || nx >= N || ny < 0 || ny >= N) continue    // 다음위치가 범위를 벗어나면 continue
//             if(board[ny][nx] === 1)             continue    // 벽이여도 continue
            
            
//             let cost = (curP.dist + 100)
//             if(curP.prevVH !== null) {
//                 if(curP.prevVH === 'v' && dy[i] === 0) { // 이전에 세로 이동했는데 x로 이동일경우(nx===0)
//                     cost+=500
//                 }
//                 if(curP.prevVH === 'h' && dx[i] === 0) { // 이전에 가로 이동했는데 Y축 이동일경우(ny===0)
//                     cost+=500
//                 }
//             }
            
//             // 지금 이동할때의 가격이 더 싸거나 같으면 
//             // 예시3의 경우 h,v,h가 되고, v,h,h가 되는데 v,h할때 가격이 같아서 이동을 안함. 그래서 가격이 h,v,h가 되서 가격이 더 올라감. 그래서 같으면 조건이 들어감. 
            
//             // visited가 필요가없는게, 왔던길을 돌아가면 가격이 증가하는거라서 돌아갈일이 없음.
//             if(dist[ny][nx] >= cost) {
//                 dist[ny][nx] = cost
//                 // console.log(dist)
//                 const moveP = dx[i] === 0 ? 'v' : 'h'
//                 const position = {x:nx, y:ny, prevVH:moveP, dist:cost}
//                 q.add(position)
//             }
//         }
//     }
//     // console.log(dist[N-1][N-1])
//     return dist[N-1][N-1]
// }