// We can narrow down our types using the typeof function.

function printAll(strs: string | string[] | null) {
    // However, we still need to be careful with our type guards.
    if (typeof strs === "object") {
        // This check fails because, in JavaScript and TypeScript, null is an object.
        // TypeScript warns us of this.
        for (const s of strs) {
            console.log(s)
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}