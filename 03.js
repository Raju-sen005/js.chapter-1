// CONST,LET AND VAR IN JAVASCRIPT
// [var ES6 mein paya jata h]{ES6=ECMAScript6}
// [const ki value ko hum change nhi kr skte]
// [let ka use hum block scoped variables ko Declare krne ke liye]
console.log("javascript tutorial-3")
let a = 65;
let b ="Raj"// [let ko update kr skte h pr redeclare nhi kr skte h]
const author = "RAJ"// [const ko na toh update kr skte ho or na hi redeclare kr skte ho]
let c = null
let d = undefined
{
    let a = "Me"
    console.log(a)
}
console.log(a)