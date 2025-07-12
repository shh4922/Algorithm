
class Node {
    constructor(data) {
        this.data = data
        this.parent = null
    }
}

function solution(enroll, referral, seller, amount) {
    const nodeMap = new Map()
    const root = new Node({
        "name": "center",
        'money':0
    })
    
    for(const name of enroll) {
      	const node = new Node({
            "name": name,
            "money": 0
        })
          
        nodeMap.set(name, node)
    }

    
    // 트리 생성
    for(let i=0; i<enroll.length; i++) {
        const name = enroll[i]
        const parent = referral[i]
        const findNode = nodeMap.get(name)
        
        if(findNode) {
            if(parent === '-') {
                findNode.parent = root 
            } else {
                const pNode = nodeMap.get(parent)
                findNode.parent = pNode
            }    
        }
    }
    
    
    for(let i=0; i<seller.length; i++) {
        const name = seller[i]
        const findNode = nodeMap.get(name)
        const money = (amount[i]*100)         // 이익금
        if(findNode) {
            add(findNode, money)        
        }

    }
    
  
    const result = []
    for(const name of enroll) {
        const node = nodeMap.get(name)
        result.push(node.data.money)
    }
    return result
}

// 처음에 진입할때는 부모가 있는지 체크햇음
const add = (node, money) => {
    let copyMoney = money
    let curNode = node
    
    while (curNode) {
        const commission = Math.floor(copyMoney * 0.1);
        curNode.data.money += (copyMoney - commission);
        if (commission === 0) break;
        copyMoney = commission;
        curNode  = curNode.parent;
  }
    
}

