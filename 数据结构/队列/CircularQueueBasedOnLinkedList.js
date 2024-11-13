class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}


class CircularQueueBasedOnLinkedList{
    head = null
    tail = null

    enqueue(val){
        if(this.head === null){
            this.head = new Node(val)
            this.head.next = this.head
            this.tail = this.head
        }else{
            // 判断是否有空间继续入队
            this.tail.next = new Node(val)
            this.tail.next.next = this.head
            this.tail = this.tail.next
        }
    }

    dequeue(){
        if(this.head === null){
            return -1
        }

        if(this.head === this.tail){
            const val = this.head.element
            this.head = null
            return val
        }
        const val = this.head.element
        this.head = this.head.next
        this.tail.next = this.head
        return val
    }

    display() {
        let res = 0
        console.log('-------获取dequeue元素------')
        while (res !== -1) {
            res = this.dequeue()
            console.log(res)
        }

    }
}


// Test
const newCircularQueue = new CircularQueueBasedOnLinkedList()
// 插入元素
newCircularQueue.enqueue(1)
newCircularQueue.enqueue(2)
newCircularQueue.enqueue(3)
// 获取元素
newCircularQueue.display()
