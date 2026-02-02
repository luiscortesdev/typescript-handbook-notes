// We can use never to define variables that should never be assigned

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;
 
function getArea(shape: Shape) {

    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            // This should never run because shape will always have a kind of "circle" or "square"
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// Let's see an example of when never could actually be assigned to.

interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 
type ShapeNew = Circle | Square | Triangle;

function getAreaNew(shape: ShapeNew) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            // TypeScript throws an error because never could actually be assigned if 
            // the kind if triangle.
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }

}
