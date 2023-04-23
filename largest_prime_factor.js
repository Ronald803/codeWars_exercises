// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?
function largestPrimeFactor(number) {
    let primos = [2]
    let residuo = number;
    let i=0
    while(residuo!=1){
      if(residuo%primos[i]===0){residuo=residuo/primos[i];console.log({residuo},{i},primos[i])}
      else {generarPrimo();i++}
    }
    function generarPrimo (){
      let j=1
      let primo = false
      while(primo===false){
        let aux=primos[i]+j
        for(let k=0;k<primos.length;k++){
          if(aux%primos[i]===0){
            k=primos.length-1;
            j++
          } else {primo=true}
        }
        primos.push(aux)
      }
    }
      
    console.log({primos},{residuo})
    return primos[primos.length-1];
  }
  
  largestPrimeFactor(10);