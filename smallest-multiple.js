// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
function smallestMult(n) {
    let array = [];
    for(let i=2;i<=n;i++){array.push(i)}
    console.log({array});
    for(let j=0;j<array.length;j++){
        for(let k=j+1;k<array.length;k++){
            if(array[k]%array[j]===0){array[k]=array[k]/array[j]}
        }
    }
    let producto = 1;
    array.map(element=>producto=producto*element)
    console.log({array});
    return producto;
}
console.log(smallestMult(10));