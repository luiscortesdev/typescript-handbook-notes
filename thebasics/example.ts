let message: string = "Hello"
console.log(message) // This works because message is a string
console.log(message()) // Doesn't work because message isn't callable. TypeScript throws an error.