// Sometimes the type of the output of a function is based on the type of the input
// We can use generics to annotate that

// Type is used as a placeholder for the type of our input
function getFirstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0]
}

// s is of type 'string'
const s = getFirstElement(["a", "b", "c"]);
// n is of type 'number'
const n = getFirstElement([1, 2, 3]);
// u is of type undefined
const u = getFirstElement([]);


// Typescript infers the value of the input and output
// Input is the variable holding our input's type and output does the same for output's type
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func)
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

// By extending the Type input for a length property, we now only limit 
// inputs to those that have a length property.
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}
 
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);


// Generics are can be constrained to return the same type they were passed
function minLength<Type extends { length: number }>(obj: Type, min: number): Type {
    if (obj.length > min) {
        return obj
    } else {
        return { length: 0 } // Doesn't work because we said we were going to return the same type. If we gave an array of nums we expect
        // an array of nums back
    }
}

// Specificying Type Arguments

// Here we are saying we accept two arrays of the same type and will return an array of that type
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

// We can workaround it and use arrays of different types by specifying the argument types
const arr = combine<string | number>([1, 2, 3], ["hello"]);