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
            let aux = factor[factor.length-1][0]
            console.log({aux},{i},{residuo},{factor});
            while(residuo%(aux+i) !== 0){i++};
            console.log({i});
            factor.push([aux+i,0])
        }
    }
    factor = factor.filter(element=>element[1]>0)
    factor.map((elem,index)=>{if(elem[1]===1){factor[index]=[elem[0]]}})
    let string = []
    factor.map(element=>{
        if(element.length>1){
            string.push(`(${element[0]}**${element[1]})`)
        } else {
            string.push(`(${element[0]})`)
        }
        
    })
    console.log(string.join(""));
    return string.join("")
}
console.log(primeFactors(60));