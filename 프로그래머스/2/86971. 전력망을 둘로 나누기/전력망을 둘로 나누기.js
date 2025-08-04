// dfs로 다 하나씩 탐색하는데, 젊반이상 갔는데, 하위노드가 있는 순간, 딱 ㄷ잘라서 방문한거랑 안한거 길이 차이 리턴

function solution(n, wires) {
    
    const gragh = Array.from({length:n+1},()=> [])
    for(const [a,b] of wires) {
        gragh[a].push(b)
        gragh[b].push(a)
    }
    
    let min = Infinity
    for(const [a,b] of wires) {
        gragh[a].splice(gragh[a].indexOf(b),1)
        gragh[b].splice(gragh[b].indexOf(a),1)
        
        const count = dfs(a,b,gragh)
        const count2 = n-count
        
        min = Math.min(min,Math.abs(count2-count))
        gragh[a].push(b)
        gragh[b].push(a)
    }
    return min
    
}

function dfs(node,parent,gragh) {
    let cnt = 1
    for(let i=0; i<gragh[node].length; i++ ) {
        if(parent !== gragh[node][i]) {
            cnt += dfs(gragh[node][i], node, gragh)
        }
    }
    return cnt
    
}
