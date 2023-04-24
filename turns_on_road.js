// There's a wolf who lives in the plane forest, which is located on the Cartesian coordinate system. When going on the hunt, the wolf starts at point (0, 0) and goes spirally as shown in the picture below:
// he wolf finally found something to eat at point (x, y). Your task is to calculate the number of turns he had to make to get to that point.
// Input/Output
// [input] integer x
// x coordinate of the final point.
// -1000000 ≤ x ≤ 1000000
// [input] integer y
// y coordinate of the final point.
// -1000000 ≤ y ≤ 1000000
// [output] an integer
// The number of turns.
// Example
// For x = 1 and y = 1, the output should be 1.
// Path:(0,0) --> (0,1) --> (1,1), 1 turn at (0,1)
// For x = 1 and y = -1, the output should be 4.
// Path:(0,0) --> (0,1) --> (1,1) --> (-1,1) --> (-1,-1) --> (1,-1),
// 4 turns at (0,1), (1,1), (-1,1), (-1,-1)

// function turnsOnRoad(x, y) {
//     //coding and coding..
//     let _x = 0
//     let _y = 0
//     let array = [[0,0]];
//     let aux = 1
    
//     for(let i=1;i<100000000;i++){
//         for(let j=1;j<=i;j++){
//             _x = _x + aux; 
//             if(_x===x&&_y===y){return array.length-1}
//         }
//         array.push([_x,_y])
//         for(let k=1;k<=i;k++){
//             _y = _y + aux;     
//             if(_x===x&&_y===y){return array.length-1}
//         }
//         array.push([_x,_y])
//         aux = -aux 
//     }
//     console.log({array});
// }
function turnsOnRoad(x, y) {
    if(x>0 && y>0 && x===y){return x*4-3} 
    if(y>0 && x===-y){return ((x**2)**(0.5))*4-2}
    if(x<0 && y<0 && x===y){ return (-x)*4-1}
    if(x>0 && y<0 && x===1-y){return -y*4}
    let sX = x*x
    let sY = y*y
    if(sX>sY){ //tramo vertical
        if(x>y){ //tramo vertical de subida
            return x*4-3
        } else { //tramo vertical de bajada
            return (-x)*4-1
        }
    } else{ //tramo horizontal
        if(y>x){ //tramo horizontal a la izquierda
            return y*4-2
        } else { // tramo horizontal a la derecha
            return (-y)*4
        }
    }
}
console.log(turnsOnRoad(-6,6));