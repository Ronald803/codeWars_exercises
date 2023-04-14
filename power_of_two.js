// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
// You may assume the input is always valid.
// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false

function isPowerOfTwo(n){
    let aux = 1
    let i = 0
    while (n>aux) {
        aux = 2**i
        i++
    }
    console.log({aux});
    if(aux===n){
        return true
    } else {
        return false
    }
}   

console.log(isPowerOfTwo(1024));