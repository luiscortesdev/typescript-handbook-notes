// Control flow analysis is the name for when TypeScript updates the type variables have based on the 
// if statements / switch statements in the code.

// TypeScript knows what the value of padding should be in both cases. Try hovering over "padding".
function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}

// The type of a variable can continue to morph as the code introduces more statements
function example() {
    let x: string | number | boolean;
    
    x = Math.random() < 0.5; // Here it's a boolean based on whether the number is less than 0.5
    
    console.log(x);
                
    
    if (Math.random() < 0.5) {
        x = "hello"; // Now, a string
        console.log(x);
                
    } else {
        x = 100; // Now, a number
        console.log(x);
                
    }
    
    // At the end, it could be a string or a number depending on whether Math.random()'s value
    return x;
        
}