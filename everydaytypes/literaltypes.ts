// TypeScript can assign variables to only be a certain value

let changingString = "Hello World";
changingString = "Olá Mundo";
// Hover over changing string and see how it's type is string
changingString;
 
const constantString = "Hello World"; // or
let constraint: "Hello World" = "Hello World"
// Hover over constraintString and you'll see it's type is "Hello World". It can only ever
// have that value.
constantString;


// This can be useful when creating functions that only accept certain values
function moveCharacter(name: string, direction: "Up" | "Down" | "Left" | "Right") {
    console.log(`Moving ${name} ${direction}`)
}

moveCharacter("Mario", "Down")
moveCharacter("Mario", "Forward") // Doesn't work because that isn't one of the types in the union


// Works with numbers too
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}


// You can even combine interfaces and primitives in the union
interface Options {
    width: number;
}
function configure(x: Options | "auto") {
    console.log(x)
}
configure({ width: 100 });
configure("auto");
configure("automatic"); // automatic is not in the union


// TypeScript always assumes that the value of objects will change later on.
const obj = { counter: 3 };
if (obj.counter >= 0) {
    obj.counter = 0; // This works because TypeScript assumed we could change the obj.counter field (which we can).
}
console.log(obj)


// But this can cause some weird errors when TypeScript is working with unions
declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method); // Even though our method is "GET", TypeScript assumes this could change and throws an error.

// Here are two ways we can workaround it

// Method 1
const req2 = { url: "https://example.com", method: "GET" as "GET" }; // Here we are saying that method is always "GET"

// Method 2
// Here we say that even though we know method could change, we can be sure it's "GET"
handleRequest(req2.url, req2.method as "GET");

// Method 3
// Here we make all the properties assigned to be type literals
const req3 = { url: "https://example.com", method: "GET" } as const
