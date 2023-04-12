// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable (seconds) {
    let hours       = Math.floor(seconds/3600)
    let minutes     = Math.floor((seconds%3600)/60)
    let finalSeconds= seconds%60
    console.log({hours},{minutes},{finalSeconds});
    let array = []
    if(hours<=9){
        array.push(0);
    }
    array.push(hours);
    array.push(":")
    if(minutes<=9){
        array.push(0)
    }
    array.push(minutes)
    array.push(":")
    if(finalSeconds<=9){
        array.push(0)
    }
    array.push(finalSeconds) 
    return(array.join(""));
}

console.log(humanReadable(55269));