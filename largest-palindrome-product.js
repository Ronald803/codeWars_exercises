// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two n-digit numbers.
function largestPalindromeProduct(n) {
    function esPalindromo(number){
        const array = number.toString().split("")
        let valores = [0,0]
        for(let i=0;i<array.length;i++){
            valores[0]=valores[0]+array[array.length-1-i]*(10**(array.length-1-i));
            valores[1]=valores[1]+array[i]*(10**(array.length-1-i))
        }
        if(valores[0]===valores[1]){return true}else{return false}
    }
    let limites = [10**(n-1),(10**n)-1]
    console.log({limites});
    let palindromos = []
    let producto = 0
    while(limites[0]!==limites[1]){
        let final = false
        let i = 0;
        while(final === false){
            producto = limites[1]*(limites[1]-i)
            if(esPalindromo(producto)){final = true;limites[1]=limites[1]-1;palindromos.push(producto)}
            else if(producto<palindromos[palindromos.length-1]){final=true;limites[1]=limites[1]-1}
            i++
        }
    }
    palindromos.sort((a,b)=>a-b)
    console.log({limites});
    console.log({palindromos});
    return palindromos[palindromos.length-1];
}
console.log(largestPalindromeProduct(3));
