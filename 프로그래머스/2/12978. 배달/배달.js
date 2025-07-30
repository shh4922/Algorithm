
// node, dist
class minHeap {
    list=[]
    
    add(data){
        this.list.push(data)
        this.bubbleUp()
    }
    
    bubbleUp() {
        let index = this.list.length-1
        let parent = Math.floor((index-1)/2)
        
        while(
            this.list[parent] && 
            this.list[index].dist < this.list[parent].dist
        ) {
            this.swap(index, parent)
            
            index= parent
            parent = Math.floor((index-1)/2)
        }
    }
    
    swap(index1, index2){
        [this.list[index1], this.list[index2]] = [this.list[index2], this.list[index1]]
    }
    
    poll() {
        if(this.list.length === 1) {
            return this.list.pop()
        }
        
        const value = this.list[0]
        this.list[0] = this.list.pop()
        this.bubbleDown()
        return value
    }
    
    bubbleDown() {
        let index = 0
        let leftIndex = index*2+1
        let rightIndex = index*2+2
        
        while(
            (this.list[leftIndex] && this.list[index].dist > this.list[leftIndex].dist) ||
            (this.list[rightIndex] && this.list[index].dist > this.list[rightIndex].dist)
        ) {
            let smallerIndex = leftIndex
            if((this.list[rightIndex] && this.list[leftIndex].dist > this.list[rightIndex].dist)) {
                smallerIndex = rightIndex
            }
            
            this.swap(index, smallerIndex)
            
            index = smallerIndex
            leftIndex = index*2+1
            rightIndex = index*2+2
        }
    }
}

// 시작지점은 1번마을
// 아니이거 dfs네 -> 아니었노 ㅋㅋ
function solution(N, road, K) {
    const visited = new Array(N+1).fill(false)
    const dist = new Array(N+1).fill(Infinity)
    dist[1] = 0
    
    const maps = Array.from({length:N+1}, ()=> [])
    road.forEach(([start, end, dist])=> {
        maps[start].push([end,dist])
        maps[end].push([start,dist])
    })
    
    
    const pq = new minHeap()
    pq.add({
        num: 1,
        dist: 0
    })
    
    while(true) {
        const top = pq.poll()
        if(!top) break
        
        const nodeIndex = top.num
        const d = top.dist
        
        if(visited[nodeIndex] || d > dist[nodeIndex]) continue
        visited[nodeIndex] = true
        
        for(const [v,w] of maps[nodeIndex]) {
            if(!visited[v] && dist[v] > d+w) {
                dist[v] = d+w
                pq.add({
                    num:v,
                    dist:dist[v]
                })
            }
        }        
    }
    return dist.filter(value => value <= K).length

}
















