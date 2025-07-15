class Node {
    data = null
    left = null
    right = null
    constructor(data) {
        this.data = data
    }
    
    isLeft() {
        return this.left === null ? false : true
    }
    
    isRight() {
        return this.right === null ? false : true
    }
}

// 결국 좌측 하위의 하위 노드는, 최상위의 x보다는 작거나 같을수밖에 없음
// 우측의 하위의 하위노드는, 최상위 노드의 x보다는 클수밖에없음
function solution(nodeinfo) {
    const newNodeInfo = nodeinfo
        .map((value,index) => {return [...value, index+1]})
        .sort((a,b)=> { return b[1] - a[1] })
    
    
    const map = makeTree(newNodeInfo)
    let nodeList = makeSortedTreeList(map)
    
    let root = null
    
    for(const node of nodeList) {
        if(root === null) {
            root = node
        } else {
            let parent = root
            while(true) {
                if(node.data.x <= parent.data.x) {      // 내 x좌표가 부모보다 작거나 같은경우
                    if(parent.isLeft()) {               // 왼쪽에 넣을수 있으면 넣어둠
                        parent = parent.left
                    } else {
                        parent.left = node
                        break
                    }
                    
                }
                else {                                  // 내 x좌표가 부모보다 큰경우
                    if(parent.isRight()) {
                        parent = parent.right
                    } else {
                        parent.right = node
                        break
                    }
                } 
            }
        }
    }
    const result = []
    result.push(preOrder(root, []))
    result.push(postOrder(root, []))
    return result
    
}

const makeTree = (newNodeInfo) => {
    const map = new Map()
    newNodeInfo.forEach((value)=> {
        const node = new Node({
            x: value[0],
            y: value[1],
            value: value[2]                  
        })
        if(map.get(value[1])) {
            map.set(value[1], [...map.get(value[1]), node])
        } else {
            map.set(value[1], [node])
        }
    })
    return map
}

const makeSortedTreeList = (map) => {
    let nodeList = []
    Array.from(map).forEach(([key,value])=> {
        value.sort((a,b)=> {
            return a.data.x - b.data.x
        })
        nodeList = [...nodeList, ... value]
    })
    return nodeList
}

const preOrder = (node, result) => {
    if(node) {
        result.push(node.data.value)
        if(node.isLeft()) {
            preOrder(node.left, result)
        }
        if(node.isRight()) {
            preOrder(node.right, result)
        }
        return result
    }
}

const postOrder = (node, result) => {
    if(node) {
        if(node.isLeft()){
            postOrder(node.left, result)
        }
        if(node.isRight()) {
            postOrder(node.right, result)
        }
        result.push(node.data.value)
        return result
    }
}