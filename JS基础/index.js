let strname = 'string name'
let symname = Symbol('propname')
typeof strname
typeof symname
let o = {}
o[strname] = 2
o[symname] = '3'
console.log(o)
// Symbol.for
let s = Symbol.for('shared')
let t = Symbol.for('shared')
console.log(s === t)
s.toString()
Symbol.keyFor(t)