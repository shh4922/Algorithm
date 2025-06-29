
class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}



function solution(n, k, cmd) {
    
    
    const node = [...new Array(n)].map((i,index) => new Node(index))
    for(let i=1; i<n; i++) {
        node[i].prev = node[i-1]
        node[i-1].next = node[i]
        
    }

    let selectNode = node[k]
    const removed = []
    
    cmd.forEach((value) => {
        const input = value.split(" ")
        switch(input[0]) {
            case 'D':
                for(let i=0; i<input[1]; i++) {
                    if(selectNode.next !== null) {
                        selectNode = selectNode.next    
                    }else {
                        break
                    }
                    
                }
                break
            case 'U':
                for(let i=0; i<input[1]; i++) {
                    if(selectNode.prev !== null) {
                        selectNode = selectNode.prev    
                    }else {
                        break
                    }
                }
                break
            case 'C':
                removed.push(selectNode)
                
                const {prev, next} = selectNode
                if(prev !== null) { prev.next = next }
                if(next !== null) { next.prev = prev } 
                
                selectNode = next !== null ? next : prev
                break
            case 'Z':
                const popNode = removed.pop()
                
                if(popNode.prev !== null) { popNode.prev.next = popNode }
                if(popNode.next !== null) { popNode.next.prev = popNode }
                break
            default:
                break
        }
    })
    const result = Array(n).fill('O')
    removed.forEach((node)=> {
        result[node.data] = 'X'
    })
    return result.join('')
    
}
