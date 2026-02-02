// We can use the in operator to narrow down types

type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        // Since the only type with the swim method is a Fish, TypeScript knows this is a Fish type.
        return animal.swim();
    }
    
    // Since the above case didn't run, TypeScript knows it's a bird
    return animal.fly();
}

// Fly and Swim are both optional
type Human = { swim?: () => void, fly?: () => void }

// But with another type then TypeScript realizes we could have multiple types for animal
function move2(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
        // This still works because we know animal was a swim method
        return animal.swim();
    }
    
    // No longer sure if animal has a fly method because Human's is optional
    return animal.fly();
}
