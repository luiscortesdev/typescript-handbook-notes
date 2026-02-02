// TypeScript recommends that strictNullChecks always be turned on
// This means we can never just access a property or method on a potentially null/undefined value.
// We have to first check the variable.

function addToX(x: number | null) {
    // return x += 1  Doesn't work because x could be null

    // This works because we first check that the type of x is number
    if (typeof x === "number") {
        return x += 1
    }
}


// We can tell TypeScript that we know a variable isn't null/undefined using a
// Non-null Assertion Operator or the "!" character.
// This isn't recommended and should only be done when you are absolutely certain.

function definitelyNotNull(x?: number | null) {
    console.log(x!.toFixed())
}