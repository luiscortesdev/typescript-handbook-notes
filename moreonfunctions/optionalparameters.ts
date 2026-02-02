// parameters marked with a question mark are annotated as optional in TypeScript

// Here x is given both the number and undefined type
function f(n: number, x?: number) {
    return n.toFixed(x)
}
f(10, 2); // OK
f(10); // OK

// We can also provide default values. x is a number here.
function f2(x = 10) {
  // ...
}


// Here the person tried to make the index parameter in the callback function optional
// But in this case, it's not really needed because extra arguments in TypeScript are ignored. Therefore,
// even if the callback function doesn't contain a parameter to handle i, we can still call it with it
// anyways
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], (a, i) => console.log(i.toFixed()));

// index is required now
function myForEachFixed(arr: any[], callback: (arg: any, index: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

myForEachFixed([1, 2, 3], (a, i) => console.log(i.toFixed()));