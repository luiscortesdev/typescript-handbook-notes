// Narrowing is making our types more specific in our code. ie narrowing them down

function padLeft(input: string, padding: string | number) {
    // Here we narrow down padding to a string type.
    // This is also called a type guard
    if (typeof padding === "string") {
        return padding + input
    }
    return " ".repeat(padding) + input
}