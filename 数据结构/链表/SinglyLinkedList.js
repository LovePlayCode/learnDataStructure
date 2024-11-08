
/**
 * 一个 Node 节点
 */
class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

/**
 * 单链表
 */
class LinkedList{
    constructor(){
        this.head = new Node('head')
    }

    // 根据 value 查找节点  遍历链表，找到节点即可。
    findByValue(item){
        // 头节点没值，所以需要头节点的下一个节点。
        let currentNode = this.head.next
        // 遍历链表。  如果最后currentNode === null 说明没找到，返回-1 如果不是，说明找到了 返回找到的值。
        while(currentNode !==null && currentNode.element !== item){

            // 指针移动即可
            currentNode = currentNode.next
        }
        return currentNode === null ? -1 : currentNode
    } 

    // 根据 index 查找节点，下标从 0 开始
    findByIndex(index){
        let currentNode = this.head.next
        let pos = 0
        while(currentNode !== null && pos !== index){
            currentNode = currentNode.next
            pos++
        }   
        return currentNode === null ? -1 : currentNode
    }

    // 向链表末尾追加节点
    append(newElement){
        const newNode = new Node(newElement)
        let currentNode = this.head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }

    // 指定元素向后插入
    insert(newElement,element){
        const currentNode = this.findByValue(element)
        if(currentNode === -1){
            console.info('未找到插入的位置')
            return
        }
        const newNode = new Node(newElement)
        // 将新元素的 next 与 找到的 currentNode 的下一个节点连接起来
        newNode.next =  currentNode.next
        // 当前元素与新元素连接
        currentNode.next = newNode
    }

    // 查找前一个
    findPrev(item){
        let currentNode = this.head
        while(currentNode.next !== null && currentNode.next.element !== item){
            currentNode = currentNode.next
        }
        if(currentNode.next === null){
            return -1
        }
        return currentNode
    }

    // 根据值删除
    remove(item){
        const prevNode = this.findPrev(item)
        if(prevNode === -1){
            console.info('未找到元素')
            return 
        }
        prevNode.next = prevNode.next.next
    }

    // 遍历显示所有节点
    display(){
        let currentNode = this.head.next
        while(currentNode !== null){
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
}

// Test
const LList = new LinkedList()
LList.append('chen')
LList.append('curry')
LList.append('sang')
LList.append('zhao') // chen -> curry -> sang -> zhao
console.log('-------------insert item------------')
LList.insert('qian', 'chen') // 首元素后插入
LList.insert('zhou', 'zhao') // 尾元素后插入
LList.display() // chen -> qian -> curry -> sang -> zhao -> zhou
console.log('-------------remove item------------')
LList.remove('curry')
LList.display() // chen -> qian -> sang -> zhao -> zhou
console.log('-------------find by item------------')
LList.findByValue('chen')
console.log('-------------find by index------------')
LList.findByIndex(2)
console.log('-------------与头结点同值元素测试------------')
LList.insert('head', 'sang')
LList.display() // chen -> qian -> sang -> head -> zhao -> zhou
LList.findPrev('head') // sang
LList.remove('head')
LList.display() // chen -> qian -> sang -> zhao -> zhou