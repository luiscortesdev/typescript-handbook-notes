// The instanceof operator can be used to narrow down types.

function logValue(x: Date | string) {
    if (x instanceof Date) {
        // We know x is an instanceof the Date class so we can run the method
        console.log(x.toUTCString());
                
    } else {
        // We know x is a string
        console.log(x.toUpperCase());
                
    }
}