// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
// function specialPythagoreanTriplet(n) {
//     let array = [3,4,5];
//     let suma = 0;
//     let i = 1
//     while(suma!==n){
//         suma = i*array[0]+i*array[1]+i*array[2];
//         i++;
//     }
//     console.log({suma},{i});
//     return array[0]*array[1]*array[2]*((i-1)**3)
// }
function specialPythagoreanTriplet(n){
    let array=[3,4,5];
    let numb = n/3
    let k = numb/array[1]
    return array[0]*array[1]*array[2]*(k**3)
}
console.log(specialPythagoreanTriplet(1000));