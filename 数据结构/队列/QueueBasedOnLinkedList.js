class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}


class QueueBasedOnLinkedList {
    head = null
    tail = null
    
    // 入队
    enqueue(val){
        if(this.head === null){
            this.head = new Node(val)
            this.tail = this.head
        }else{
            this.tail.next = new Node(val)
            this.tail = this.tail.next
        }
    }

    // 出队
    dequeue(){
        if(this.head !== null){
            const val = this.head.element
            this.head = this.head.next
            return val
        }
        return -1
    }
}

const queue = new QueueBasedOnLinkedList()
queue.enqueue(3)
queue.enqueue(4)
console.log(queue)
console.log(queue.dequeue())