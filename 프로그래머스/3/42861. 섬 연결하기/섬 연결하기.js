
const find = (parent, index) => {
    if(parent[index] === index) {
        return index
    }
    return find(parent, parent[index])
}


const union = (parent, rank, x, y) => {
    const rootX = find(parent, x)
    const rootY = find(parent, y)
    
    if(rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX
    } else if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY
    } else {
        parent[rootY] = rootX
        rank[rootX] += 1
    }
}


function solution(n, costs) {
    costs.sort((a,b)=>{
        return a[2] - b[2]
    })
    
    const parent = Array.from({length:n}, (_,index)=>index)
    const rank = Array(n).fill(0)
    
    let minCost = 0
    let cnt = 0
    
    for(const edge of costs) {
        if(cnt === n-1) {
            break
        }
        
        const x = find(parent, edge[0])
        const y = find(parent, edge[1])
        
        if(x !== y) {
            union(parent,rank,x,y)
            
            minCost += edge[2]
            cnt++
        }
    }
    return minCost
}