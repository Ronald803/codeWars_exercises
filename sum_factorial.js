// Factorials are often used in probability and are used as an introductory problem for looping constructs. In this kata you will be summing together multiple factorials.
// Here are a few examples of factorials:
// 4 Factorial = 4! = 4 * 3 * 2 * 1 = 24
// 6 Factorial = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
// In this kata you will be given a list of values that you must first find the factorial, and then return their sum.
// For example if you are passed the list [4, 6] the equivalent mathematical expression would be 4! + 6! which would equal 744

function sumFactorial(arr){
    function factorial(number){
        let auxN=1;
        for(let i=number;i>0;i--){
            auxN = auxN * i;
        }
        return auxN
    }
    let sum=0;
    arr.map( element=>{
        sum = sum + factorial(element)
    })
    console.log({sum});
    return sum
}

console.log(sumFactorial([4,6]));