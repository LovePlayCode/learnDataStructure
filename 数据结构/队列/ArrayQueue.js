class ArrayQueue{
    items = []
    n = 0
    head = 0
    tail = 0

    constructor(length){
        this.items = Array.from({length: length})
        this.n = length
    }

    /**
     * 
     * @param {*} item 
     * @returns 
     * 1. 如果tail ===n 表示队列末尾没有空间
     * 2. 如果在第一步的前提下，head = 0 表示整个队列占满了
     * 3. 进行数据搬移   其实就是将 head 目前的位置 搬移到 从头开始的位置
     * 4. 更新 tail
     * 5. 入队
     * 
     */
    enqueue(item){
        if(this.tail === this.n){
            if(this.head === 0){
                return false
            }
            for(let i = this.head;i< this.tail;i++){
                this.items[i-this.head] = this.items[i]
            }
            // 更新 tail
            this.tail -= this.head
            this.head = 0
        }
        this.items[this.tail++] = item
        return true
    }

    // 出队
    dequeue(){
        if(this.head === this.tail){
            return null
        }
        let ret = this.items[this.head]
        this.head++
        return ret
    }
}
const res = new ArrayQueue(3)
res.enqueue(3)
res.enqueue(4)
res.enqueue(5)
console.log(res.dequeue())
res.enqueue(30)
res.enqueue(4)
res.enqueue(5)
console.log(res.items)
console.log(res.dequeue())
console.log(res.dequeue())
console.log(res.dequeue())
console.log(res.dequeue())