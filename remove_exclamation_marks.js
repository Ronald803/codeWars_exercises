// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

function remove (string) {
    let array1 = string.split(" ")
    let array2 = []
    array1.map(element=>{ array2.push(element.split("")) })
    array1 = []
    let array3 = []
    array2.map( (element1) =>{
        let signo= 0
        element1.map( element2 =>{
            if(element2==="!"){signo++}
        })
        if(signo===1){array1.push(element1.join(""))}
        array3.push(element1.join(""))
    } )
    array1.map( element => {
        const index = array3.findIndex( el => el===element)
        if(index!=-1){ array3.splice(index,1) }
    })
    console.log({array1},{array2},{array3});
    if(array3.length===0){return ""}
    return array3.join(" ");
}

console.log(remove("Hi! !Hi! my! name is Ronald"));