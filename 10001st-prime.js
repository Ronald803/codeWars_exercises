// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the nth prime number?
function nthPrime(n) {
    let array = [2]
    function esPrimo(number){
        let primo = false
        for(let i=0;i<array.length;i++){
            if(number%array[i]===0){break}
            if(i===array.length-1){primo=true;}
        }
        return primo    
    }
    function generarPrimo(){
        let i=1;
        let nuevo = false
        while(nuevo===false){
            let pivote = (array[array.length-1])+i
            if(esPrimo(pivote)){array.push(pivote);nuevo=true}else{i++}    
        }    
    }
    for(let i=1;i<n;i++){generarPrimo()}
    return array[array.length-1]
}
console.log(nthPrime(6));