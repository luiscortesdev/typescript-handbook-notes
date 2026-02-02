// There are a few ways we can narrow down our types

function printAll(strs: string | string[] | null) { 
    if (typeof strs === "object") {
        // This check fails because, in JavaScript and TypeScript, null is an object.
        for (const s of strs) {
            console.log(s)
        }
    }
}