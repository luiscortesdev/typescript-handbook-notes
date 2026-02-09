// Excess property checking balidates an object thoroughly when it is created and assigned to an object type during creation.

interface SquareConfig {
    color?: string;
    width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
 
let mySquare = createSquare({ colour: "red", width: 100, color: "blue" }); // There is no colour property in the SquareConfig type


// TypeScript assumes that it is an error and not an extra property.
// Object literals get special treatment and undergo excess property checking when
// assigned to other variables or passed as arguments.

// We can get around this check by using a type assertion
let mySquareFixed = createSquare({ colour: "red", width: 100, color: "blue" } as SquareConfig);

// We could also just change the type to allow for extra properties using index signatures
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: unknown; // We can have extra prop names of unknown types
}

// now colour works
let myNewSquare = createSquare({ colour: "red", width: 100 });

// We could also assign it to another variable and that would also let it work
interface RectConfig {
    color?: string;
    length?: number;
    width?: number; // We can have extra prop names of unknown types
}
function createRect(config: RectConfig): { color: string; area: number; } {
    return {
        color: config.color || "red",
        area: config.length && config.width ? config.length * config.width : 0,
    };
}
// No errors even with the extra opacity property
let rectOptions = { opacity:0.5, color: "red", length: 12, width: 12 }
let newRect = createRect(rectOptions)

// However, this only works as long as there is at least one shared property between the type and object
let badRectOptions = { opacity: 0.5 };
let badRect = createRect(badRectOptions); // TypeScript throws an error because the options and type contain no shared properties