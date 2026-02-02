// We can define an object's type by listing its properties and types.
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Some object properties might not always exist. We can define these as optional using a "?".
function printFullName(person: {firstName: string; middleName?: string; lastName: string}) { 
    console.log(person.firstName, person.middleName, person.lastName)
}
printFullName({firstName: "Bob", lastName: "Guy"}) // Won't error even though there isn't a middle name.