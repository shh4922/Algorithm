function solution(n, computers) {
    const visited = new Array(n).fill(false)
    let result = 0
    
    for(let i=0; i<n; i++) {
        if(visited[i]) continue
        
        const stack = [i]
        
        while(stack.length !== 0) {
            const node = stack.pop()
            if(visited[node]) continue
            visited[node] = true
            
            for(let j=0; j<computers[node].length; j++) {
                if(computers[node][j] === 1 && !visited[j]) {
                    stack.push(j)
                }
            }
        }
        result++
    }
    
    return result
}



// function solution(n, computers) {
//     const visited = new Array(n).fill(false)
//     let result = 0
    
//     for(let i=0;i<n;i++) {
//         if(!visited[i]) {
//             dfs(visited,i,computers)    
//             result++
//         }
//     }
//     return result
// }
// function dfs(visited, node, computers) {
//     visited[node] = true
    
//     for(let index=0; index<computers[node].length; index++) {
//         if(computers[node][index] === 1 && !visited[index]) {
//             dfs(visited,node,computers)
//         }
//     }
// }

