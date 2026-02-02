type Fish = { swim: () => void };
type Bird = { fly: () => void };

// We can control how types change in our code.
// Here we use a predicate of form parameterName is Type "pet is Fish"
function isFish(pet: Fish | Bird): pet is Fish {
    // Assert that pet is a fish to check if it really contains the swim method
    return (pet as Fish).swim !== undefined
}

let pet: Fish = { swim: () => console.log("I'm a fish") }
// In this if statement we narrow down pet to the Fish type.
if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly(); // Fish doesn't have a fly method
}