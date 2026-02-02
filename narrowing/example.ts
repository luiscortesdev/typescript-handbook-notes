// Narrowing is making our types more specific in our code. ie narrowing them down

function padLeft(input: string, padding: string | number) {
    if (typeof padding === "string") {
        return padding + input
    }
    return " ".repeat(padding) + input
}