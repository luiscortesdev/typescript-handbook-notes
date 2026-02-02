// Sometimes we need to give TypeScript more information about the type of a value.

// Here we are letting TypeScript know that our myCanvas variable is an HTMLCanvasElement
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// Can also use angle-bracket syntax
const myDiv = <HTMLDivElement>document.getElementById("my_div")


// TypeScript only lets you asset types to be more or less specific versions of the original type.
let n: number = 0 as string // This doesn't work because 0 can never be a string

// We could get around this by first asserting it to any then to number
// This workaround may be needed in more complex coercions.
const a = "String" as any as number

