
/**
 * 
 * @param {number[]} state 
 * @param {number[]} arr 
 * @param {number[]} res 
 * @param {number[]} select 
 * @param {number} length 
 * @returns 
 */
function brackFn(state,arr,res,select,length){
    if(state.length === length){
        res.push([...state])
        return
    }
    arr.forEach((val,index)=>{
        if(!select[index]){
            state.push(val)
            select[index] = true
            brackFn(state,arr,res,select,length)
            state.pop()
            select[index] = false
        }
    })
}

// 设计软件: mgo  canvas c++  wasm(二进制)  桥梁 C++桥梁  
// 原理性东西 ->  Promise 是什么?  属性, 使用场景? 优缺点。 在哪看？ 稀土掘金...小册  useEffect 
// 学习建议: 大厂      

/**
 * 
 * @param {number[]} num 
 */
function main(num){
    const res = []
    const select = Array.from({
        length: num.length
    }).fill(false)
    brackFn([],num,res,select,num.length)
    return res
}
const res = main([1,2,3])
console.log(res)