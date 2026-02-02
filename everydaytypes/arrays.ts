// You can add square brackets to the end of a primitive to define an array of that primitive
// ex. string[], number[]
// You can also use Array<primitve> to define an array of primitives

let myStrings: string[] = ["hi", "hello", "welcome"]
let myNumbers: Array<number> = [1, 2, 3, 4, 5]

// TypeScript has a special type called any that can be assigned to values.
// However, TypeScript won't do any of its typechecking.

let obj: any = { x: 0 }
obj.foo() // TypeScript won't throw an error even though obj doesn't have a method called foo

// TypeScript will let you assign a variable of a number type to obj even though you probably
// don't want this.
const n: number = obj