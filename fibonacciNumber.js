// Problem 2: Even Fibonacci Numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
function fiboEvenSum(n) {
    let array = [1,2]
    let i = 1
    let pares = 2
    let aux = 0
    while(array[i]<=n){
      aux = array[i-1]+array[i]
      if(aux%2===0){
        pares=pares+aux
      }
      array.push(aux)
      i++
    }
    console.log({array},{pares})
    return pares;
  }
  fiboEvenSum(60)