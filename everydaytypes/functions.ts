// Parameters can be given type annotations
function greet(name: string) {
    console.log(`Hello, ${name}`)
}

greet(24) // Throws an error


// Function return values can also be given types
function randomNumber(): number {
    return Math.random()
}


// Functions that return promises of a certain type can also be annotated
async function getFavoriteNumber(): Promise<number> {
    return 26
}


// TypeScript can infer the type of some anonymous functions
let cities = ["Miami", "Dallas", "Austin", "San Francisco"]

// Hover over the parameter city and you will see TypeScript already knows it should be a string.
cities.forEach((city) => console.log(city))