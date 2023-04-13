// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n){
    //your code here
    //if(n<10){return -1}
    const number = n.toString().split("")
    //console.log({number});
    //console.log({n});
    const arrayNumbers = []
    function two(c,d){return [[c,d],[d,c]]}
    function three(a,b,c){
        const arr1 = two(b,c)
        arr1.map( element => {element.unshift(a)})
        const arr2 = two(c,a)
        arr2.map( element => {element.unshift(b)})
        const arr3 = two(a,b)
        arr3.map( element => {element.unshift(c)})
        return arr1.concat(arr2).concat(arr3)
    }
    function four(a,b,c,d){
        const arr1 = three(b,c,d)
        arr1.map( element=> {element.unshift(a)})
        const arr2 = three(a,c,d)
        arr2.map( element => {element.unshift(b)})
        const arr3 = three(a,b,d)
        arr3.map( element => {element.unshift(c)})
        const arr4 = three(a,b,c)
        arr4.map( element => {element.unshift(d)})
        return arr1.concat(arr2).concat(arr3).concat(arr4)
    }
    let array = []
    switch (number.length) {
        case 1:
            return -1
        case 2:
            array = two(number[0],number[1])
            break
        case 3:
            array = three(number[0],number[1],number[2])
            break
        case 4:
            array = four(number[0],number[1],number[2],number[3])
            break
        default:
            break;
    }
    let newArray = []
    array.map(element=>{
        newArray.push(parseInt(element.join("")))
    })
    newArray.sort((a,b)=>a-b)
    console.log(newArray);
    const index = newArray.indexOf(n)
    if(index===newArray.length-1){
        return -1
    } else if(newArray[index]===newArray[index+1]){
        return newArray[index+2]
    } else {
        return newArray[index+1]
    }
}

console.log(nextBigger(414));

//console.log(four("a","b","c","d"));