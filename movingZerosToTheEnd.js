// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let newArray = []
    let zerosArray = []
    arr.map( element => {
        if(element!==0){
            newArray.push(element)
        } else {
            zerosArray.push(element)
        }
    })
    return newArray.concat(zerosArray)
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))