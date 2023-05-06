// Task
// Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering its characters and replacing them with digits (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.
// If there is no solution, return -1
// Examples
// "ab"  -->  81
// "zzz" -->  -1  // There are no 3-digit square numbers with identical digits
// "aba" --> 900  // It can be obtained after reordering the initial string into "baa"
// Input/Output
// [input] string s
// Constraints: 2 ≤ s.length < 10.
// [output] an integer
function constructSquare(s) {
    let cifras = s.length;
    let limites = [10**(cifras-1),(10**cifras)-1]        
    let i=2;
    let cuadrados = [1]
    while(cuadrados[cuadrados.length-1]<limites[1]){
        cuadrados.push(i**2)
        i++;
    }
    cuadrados = cuadrados.filter(element=>element>=limites[0]);
    cuadrados = cuadrados.filter(element=>element<=limites[1]);
    function descomponer(number){
        let cifras = number.toString().length
        let descompuesto = [];
        let residuo = number
        for(let i=cifras-1;i>=0;i--){
            let digit = Math.floor(residuo/(10**i))
            descompuesto.push(digit)
            residuo = residuo%(10**i)
        }
        return descompuesto
    }
    //for(let j=0;j<cuadrados.length;j++){ cuadrados[j]=descomponer(cuadrados[j]) }
    function digDiferentes(num){
        let numArr;
        if(typeof num === 'string'){numArr=num.split("")} else {numArr=descomponer(num)}
        let newArr = []
        numArr.map(element=>{
            let index = newArr.findIndex(ele=> ele[0]===element)
            if(index>=0){newArr[index][1]=newArr[index][1]+1}else{newArr.push([element,1])}
        })
        let salida = [];
        newArr.map(e=>{salida.push(e[1])})
        return [num,salida.sort((a,b)=>a-b).join("")]
    }
    for(let i=0;i<cuadrados.length;i++){cuadrados[i]=digDiferentes(cuadrados[i])}
    let filtro = digDiferentes(s)
    let filtrados = cuadrados.filter( elem => elem[1]==filtro[1])
    console.log({filtro});
    if(filtrados.length===0){return -1}else{return filtrados[filtrados.length-1][0]}
    
}
console.log(constructSquare("aba"));