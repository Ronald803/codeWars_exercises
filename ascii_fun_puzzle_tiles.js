// Because my other two parts of the serie were pretty well received I decided to do another part.
// Puzzle Tiles
// You will get two Integer n(width) and m (height) and your task is to draw following pattern. Each line is seperated with '\n'.
// Both integers are equal or greater than 1. No need to check for invalid parameters.
// There are no whitespaces at the end of each line.
// For example, for width = 4 and height = 3, you should draw the following pattern:
//    _( )__ _( )__ _( )__ _( )__
//  _|     _|     _|     _|     _|
// (_   _ (_   _ (_   _ (_   _ (_
//  |__( )_|__( )_|__( )_|__( )_|
//  |_     |_     |_     |_     |_
//   _) _   _) _   _) _   _) _   _)
//  |__( )_|__( )_|__( )_|__( )_|
//  _|     _|     _|     _|     _|
// (_   _ (_   _ (_   _ (_   _ (_
//  |__( )_|__( )_|__( )_|__( )_|

function puzzleTiles(width, height){
	let fila1 = "_( )__ "
    let fila2 = "     _|"
    let fila3 = "  _ (_ "
    let fila4 = "_( )_| "
    let f1 = ["   "]
    let f2 = [" _|"]
    let f3 = ["(_ "]
    let f4 = [" |_"]
    for(let i=0;i<width;i++){
        f1.push(fila1)
        f2.push(fila2)
        f3.push(fila3)
        f4.push(fila4)
    }
    f1 = f1.join("")
    f2 = f2.join("")
    f3 = f3.join("")
    f4 = f4.join("")
    f2 = `\n${f2}`
    f3 = `\n${f3}`
    f4 = `\n${f4}`
    //console.log(f1);
    let final = f1
    for(let j=0;j<height;j++){
        final = final+f2+f3+f4
        //console.log(f2);
        //console.log(f3);
        //console.log(f4);
    }
    return final
}

console.log(puzzleTiles(1,1));
console.log("   _( )__\n _|     _|\n(_   _ (_\n |__( )_|");