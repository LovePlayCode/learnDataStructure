function main(n){
    if(n === 1){
        return 1
    }
    return main(n-1) + 1
}

const res = main(9)
console.log('res==',res)