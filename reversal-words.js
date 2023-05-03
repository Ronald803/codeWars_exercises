// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
    let array = str.split(" ");
    let largo = array.length;
    let newArray = []
    for(let i=0;i<largo;i++){
        newArray.push(array.pop())
    }
    console.log(newArray);
    return newArray.join(" ")
}

console.log(reverseWords("The greatest victory is that which requires no battle"));