// We can give more information about a property within our annotations.

// We can define a property as optional using a question mark "?"
interface PaintOptions {
    shape: string;
    xPos?: number;
    yPos?: number;
}

// TypeScript will give optional parameters their type plus a union of null.
// Therefore, we will need to check if exists before accessing its value.
function paintShape(opts: PaintOptions) {
    let xPos = opts.xPos === undefined ? 0 : opts.xPos;
    let yPos = opts.yPos === undefined ? 0 : opts.yPos;
}

// xPos and yPos do not need to be added to our function calls.
paintShape({ shape: "circle" });
paintShape({ shape: "circle", xPos: 100 });
paintShape({ shape: "circle", yPos: 100 });
paintShape({ shape: "circle", xPos: 100, yPos: 100 });

// Or we can destructure our object and assign default values.
function paintShapeDestructure({ shape, xPos=0, yPos=0 }: PaintOptions) {
    console.log(xPos, yPos)
}
paintShapeDestructure({ shape: "circle", xPos: 100, yPos: 100 });

// Unfortunately, you cannot do type annotations within destructing patterns,
// but you can assign it outside.

// This doesn't work
function getSum({ x: number, y: number }) {
    console.log(x)
}

// This is what you should do instead.
function getSumFixed({ x, y }: { x: number, y: number }) {
    return x+y
}
console.log(getSumFixed({x: 100, y: 150}))