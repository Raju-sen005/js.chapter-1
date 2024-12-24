// PRIMITIVES AND OBJECT IN JAVASCRIPT

// [javascript mein 7 type ke primitives data type hote h]
// [ 7 types of primitives dat type =>
//     *Null
//     *Number
//     *Symbol
//     *Sring
//     *Boolean
//     *BigInt
//     *undefined
// ]


// primitives:=>
// nn bb ss u
let a = null
let b = 345;
let c = true;
let d = BigInt('567') + BigInt(3);
let e = "Raju"
let f = Symbol(' i am a boy')
let g = undefined
console.log(a, b, c, d, e, f, g)
// type of
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)

// object:=>
const item ={
    'Raju': 90,
    'Naveen': 80,
    'College': undefined
 }
console.log(item["Raju"])