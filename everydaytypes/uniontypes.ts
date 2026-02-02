// We can build new types out of existing types using a union and the "|" character.

// Here id can be a number OR a string
function printId(id: number | string) {
    console.log(id)
}
// printId(true) Errors because true is a boolean


// TypeScript only allows operations that are valid for every type in the union.
function printIdUppercase(id: number | string) {
    console.log(id.toUpperCase()) // Errors because you can't use toUpperCase on a number.
    // This works though because we first check the type of id.
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}

// A similar example using arrays.
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}

// But if every member of the union has a function/property then you don't need to check.
function getFirstThree(x: number[] | string) {
    console.log(x.slice(0, 3)) // This works
}