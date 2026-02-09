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
 
let mySquare = createSquare({ colour: "red", width: 100 }); // There is no colour property in the SquareConfig type