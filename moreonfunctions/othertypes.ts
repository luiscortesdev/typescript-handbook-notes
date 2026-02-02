// TypeScript has a lot other types we can use when working with functions

// The inferred return type is void
function noop() {
    return;
}

// unknown value is similar to any except you can't do anything with it
function f1(a: any) {
    a.b(); // OK
}
function f2(a: unknown) {
    a.b(); // Not ok because a is of type unknown. We can't do anything with it.
}

// Can be usefulf or making things safer
function safeParse(s: string): unknown {
    return JSON.parse(s);
}
 
// Need to be careful with 'obj'!
// const obj = safeParse("");


// Sometimes functions will never return a value. Not even a void. Kind of rare.
function fail(msg: string): never {
    throw new Error(msg);
}

// As mentioned previously, it can occur when there is nothing left in a union to cover.
function fn(x: string | number) {
    if (typeof x === "string") {
        // do something
    } else if (typeof x === "number") {
        // do something else
    } else {
        x; // has type 'never'!
    }
}


// We can also define things as a type of function. It's almost always better to just annotate the function instead.
function doSomething(f: Function) {
    return f(1, 2, 3);
}

// Like this
function doSomethingBetter(f: (x: number, y: number, z: number) => void) {
    return f(1, 2, 3);
}

doSomethingBetter((x: number, y: number, z: number) => console.log(x+y+z))