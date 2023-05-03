// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending){
    let string = str.split("");
    let end = ending.split("");
    console.log({string},{end});
    for(let i=0;i<ending.length;i++){
        let a = string.pop();
        let b = end.pop();
        if(a!=b){
            return false
        }
    }
    return true
}

console.log(solution("abc","k"));