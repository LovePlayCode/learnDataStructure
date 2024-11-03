/**
 * 深拷贝
 * @param {*} obj 
 * @param {WeakMap} map
 * 
 *  {
 *      name: 'string',
 *      a: {
 *          age: 90
 *      }
 *  }
 *  
 */

function main(obj,p,map = new WeakMap()){
    if(obj === null || typeof obj !=='object'){
        return obj
    }

    const currentObj = {}

    if(map.has(obj)){
        currentObj[p] = obj
    }
    
    map.set(currentObj,p)
    if(Array.isArray(obj)){
        const newArr = []
        for(let arr of obj){
            newArr.push(main(arr,p,map))
        }
    }


}