function firstElement1<Type>(arr: Type[]) {
    return arr[0];
}
 
function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}

// firstElement is the better solution because it allows typescript to inference the type of the input and 
// output.
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

// Always use as little parameters and types as possibles as it makes your code more readable.

// Better solution that relates func to a function directly
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

// Worse solution that uses an extra Func type to annotate the filter function
function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
): Type[] {
    return arr.filter(func);
}


// Type parameters should appear at least twice. Type parameters are used for relating the types of 
// multiple values. It makes no sense to use them if the type parameter only appears once. There is likely
// a better way of going about things.

// Str only appears once
function greet<Str extends string>(s: Str) {
    console.log("Hello, " + s);
}

// We could have just wrote
function greet2(s: string) {
    console.log("Hello, " + s);
}