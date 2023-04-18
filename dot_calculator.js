// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.
// Here are the following valid operators :
// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""
// STRINGSFUNDAMENTALS
function dotCalculator (equation) {
	let eqn = equation.split(" ").join("")
    console.log({eqn});
    let dots = [0,"",0,0]
    for(let i=0;i<eqn.length;i++){
        if(eqn[i]!="."){
            dots[1]=eqn[i]
        } else {
            dots[1]=="" ? dots[0]++ : dots[2]++
        }
    }
    switch (dots[1]) {
        case "+":
            dots[3]=dots[0]+dots[2]
            break;
        case "-":
            dots[3]=dots[0]-dots[2]
            break;
        case "*":
            dots[3]=dots[0]*dots[2]
            break;
        case "/":
            dots[3]=Math.floor(dots[0]/dots[2])
            break;
        default:
            break;
    }
    console.log({dots});
    let string=[]
    for(let j=0;j<dots[3];j++){
        string.push(".")
    }
    return string.join("")
}

console.log(dotCalculator("...... // .."));