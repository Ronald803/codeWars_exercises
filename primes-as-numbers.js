// Given a positive number n > 1 find the prime factor decomposition of n. 
// The result will be a string with the following form:
//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
function primeFactors(n){
    //your code here
    let factor = [[2,0]];
    let residuo = n;
    while(residuo!==1){
        if(residuo%factor[factor.length-1][0]===0){
            factor[factor.length-1][1]=factor[factor.length-1][1]+1;
            residuo = residuo/factor[factor.length-1][0]
        }else{
            let i = 1;
            console.log(factor[factor.length-1][0]);
            while(residuo%(factor[factor.length-1][0]+i)!=0){i++};
            factor.push([factor[factor.length-1]+i-1,0])
        }
    }
    return factor
}
console.log(primeFactors(12));