//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    //your code here
    let array = []
    for(let i = 1; i <= num; i++){
        array.push(`${i} sheep...`)
    }
    console.log({array});
    return array.join("")
}

console.log(countSheep(0));