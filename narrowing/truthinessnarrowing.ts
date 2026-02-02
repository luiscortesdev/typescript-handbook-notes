// Many values can be truthy, not just a true boolean

function getOnlineUsers(users: number) {
    if (users) {
        return `There are ${users} users!`
    }
    return "Noone online!"
}

// Values such as 0 NaN "" (the empty string) 0n (the bigint version of zero) null undefined all coerce to falsy
// Other values coerce to truthy

// The function below uses the fact that null evalutes to guard against null values
function printAll(strs: string | string[] | null) {
    // if strs makes sure that it is not null
    if (strs && typeof strs === "object") {
        for (const s of strs) {
        console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

// Boolean negations can also be used to narrow types
function addNums(x: number | null, y: number | null) {
    // Here we use boolean negation to both do something when a variable doesn't exist and return it back
    if (!x) {
        return y
    } else if (!y) {
        return x
    } else {
        return x + y
    }
}
console.log(addNums(1, 10))