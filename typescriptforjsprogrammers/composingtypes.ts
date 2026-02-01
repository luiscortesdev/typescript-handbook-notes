// Create complex types by combining simple ones

// Unions: declare that a type could be one of many types
type myBool = true | false

// Other examples. We can use unions to define what values a variable should have.
type WindowStates = "open" | "closed" | "minimized"
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

let myWindowState: WindowStates = "open"


// Can be used to handle mutiple different types
function getLength(obj: string | string[]) {
    return obj.length // Will return the length of the string or the length of the array of strings
}


// Use typeof or isArray to determine what data type you are working with.
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") { // Returns the string in an array
        return [obj];
    }
    
    return obj; // Returns the array of strings as is.
}

console.log(wrapInArray("Hello World")) // Returns: [ 'Hello World' ]