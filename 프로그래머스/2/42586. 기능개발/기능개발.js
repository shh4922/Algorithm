class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    
    
    push(data) {
        if(!this.head) {
            this.head = data
            this.tail = data
        } else {
            this.tail.next = data
            this.tail = data
        }
        this.size++
    }
    
    pop() {
        if(!this.head) {
            return null
        }
        
        const removed = this.head
        this.head = this.head.next
        
        if(!this.head) {
            this.tail = null
        }
        this.size--
        return removed
    }
}

function solution(progresses, speeds) {
    const queue = new Queue()
    
    progresses.forEach((value,index)=> {
        let days = Math.floor((100-value)/speeds[index])
        if((100-value)%speeds[index] !== 0) {
            days++
        }
        const node = new Node(days)
        queue.push(node)
    })
    
    
    const result = []
    while(true) {
        if(queue.size === 0){ break }
        
        
        const headValue = queue.pop()
        
        let count = 1
        
        while(true) {
            if(queue.size === 0){
                break
            }
            else if(headValue.data >= queue.head.data) {
                queue.pop()
                count++
            }
            else {
                break
            }

        }
        // break
        result.push(count)
    }
    return result
}