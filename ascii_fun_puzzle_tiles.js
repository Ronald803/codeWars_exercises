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
	let fila1 = "   _( )__ "
    let fila2 = " _|     _|"
    let fila3 = "(_   _ (_ "
    let fila4 = "  |__( )_|"
    //return [fila1,fila2,fila3,fila4]
    let f1 = []
    let f2 = []
    let f3 = []
    let f4 = []
    for(let i=0;i<width;i++){
        f1.push(fila1)
        f2.push(fila2)
        f3.push(fila3)
        f4.push(fila4)
    }
    console.log(f1);
    for(let j=0;j<height;j++){
        console.log(f2);
        console.log(f3);
        console.log(f4);
    }
}

console.log(puzzleTiles(3,2));