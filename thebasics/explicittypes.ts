// Instead of letting TypeScript infer them, we can explicitly annotate our types
// for variables, parameters, and function return values.

// Here we are explicitly making name a string type and giving date a Date type.
function greet(name: string, date: Date) {
    console.log(`Hello ${name}, the current date is ${date.toDateString()}`)
}

greet("Logan", new Date())