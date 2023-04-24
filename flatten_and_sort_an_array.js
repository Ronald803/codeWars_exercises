// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
function flattenAndSort(array) {
    // Good luck, brave code warrior!
    let auxArr = []
    array.map(element=>{
        if(element.length!==0){ auxArr.push(element) }
    })
    if(auxArr.length===0){ return []}
    console.log({auxArr});
    let newArr=auxArr.join(",").split(",");
    newArr.sort((a,b)=>a-b)
    auxArr=[]
    newArr.map(element => {auxArr.push(Number(element))})
    console.log({newArr},{auxArr});
    return auxArr;
}

console.log(flattenAndSort([[1,2,3],[7,4,6]]));