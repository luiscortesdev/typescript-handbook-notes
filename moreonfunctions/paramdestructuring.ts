// We can unpack objects or destructure them when passed as parameters. This is extremely useful in web frameworks like React
// or Next.js.

// We unpack the object's a, b, and c properties. Could also make this a named type.
function multiply({ a, b, c }: { a: number; b: number; c: number }) {
    return a*b*c
}

type myObj = { a: number; b: number; c: number }
function sum({ a, b, c }: myObj) {
    return a+b+c
}

let mult = multiply({ a: 20, b: 10, c: 5 })
let mySum = sum({ a: 1, b: 7, c: 6 })