// TypeScript can use equality checks in switch or if statements to narrow types

function convertToUpperCase(x: string | boolean, y: string | number) {
    if (x === y) {
        // The only way they are equal is if both are strings, so this works.
        x.toUpperCase();
          
        y.toLowerCase();
    } else {
        console.log(x, y)
    }
}

// We can use inequality checks to narrow down our types.
function printAll(strs: string | string[] | null) {
    if (strs !== null) {
        // Now we know strs is not null
        if (typeof strs === "object") {
            // Now we know strs is an Array since it isn't null. TypeScript knows too: try hovering over strs.
            for (const s of strs) {
                            
                console.log(s);
            }
        } else if (typeof strs === "string") {
            // Here we checked if strs is the type string
            console.log(strs);

        }
    }
}

// Loose equality checks can narrow down multiple types at once.

interface Container {
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type using a loose equality check.
    if (container.value != null) {
        console.log(container.value);
                            
    
        // Now we can safely multiply 'container.value'.
        container.value *= factor;
    }
}