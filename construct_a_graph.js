// Given a list of points, construct a graph that includes all of those points and the position (0, 0).
// Points will be objects like so: {x: 1, y: -1}.
// A graph should be represented as a 2d array.
// Example:
// Input:
// constructGraph([{x: 2, y: 2}, {x: -2, y: -2}])
// Output:
// [
//   [' ', ' ', '|', ' ', '*'],
//   [' ', ' ', '|', ' ', ' '],
//   ['-', '-', '+', '-', '-'],
//   [' ', ' ', '|', ' ', ' '],
//   ['*', ' ', '|', ' ', ' '],
// ]
// Points on the graph are represented as '*', and the position (0, 0) is represented by a '+'.
// All positions along the x axis should be '-', and all postions along the y axis should be '|'. The rest of the positions should be spaces: ' '.
// Also, if a point is on the x or y axis, the default char should be replaced with the point char: '*'.
// Example:
// Input:
// constructGraph([{x: 0, y: 0}, {x: 1, y: 4}]);
// Output:
// [
//   ['|', '*']
//   ['|', ' '],
//   ['|', ' '],
//   ['|', ' '],
//   ['*', '-']
// ]// ^
//  //this is (0, 0)
// Graphs should be as minimal as posible while still retaining a rectangular shape. They should be just large enough to include all the points and the position (0, 0).
// If no points are given, the graph should just include the position (0, 0). Points might have the same value sometimes.

function constructGraph(points) {
    let ancho = [0,0];
    let alto = [0,0];
    if(points.length===1){
        points[0].x>0 ? ancho = [0,points[0].x] : ancho = [-points[0].x,0]
        points[0].y>0 ? alto = [0,points[0].y] : alto = [-points[0].y,0]
    } else {
        let x = [points[0].x,points[1].x]
        let y = [points[0].y,points[1].y]
        x.sort( (a,b)=> a-b )
        y.sort( (a,b)=> a-b )
        console.log({x},{y});
        x[0]<0 ? ancho = [-x[0],x[1]] : ancho = [0,x[1]]
        y[0]<0 ? alto = [-y[0],y[1]] : alto = [0,y[1]]
    }
    let mapa = []
    function crearFila(a){
        let fila = []
        for(let i=0;i<a[0];i++){
            fila.push(" ")
        }
        fila.push("|")
        for(let j=0;j<a[1];j++){
            fila.push(" ")
        }
        return fila
    }
    for(let k=0;k<alto[1];k++){
        mapa.push(crearFila(ancho))
    }
    mapa.push(["-","-","-"])
    for(let l=0;l<alto[0];l++){
        mapa.push(crearFila(ancho))
    }
    //console.log(crearFila(ancho))
    console.log({ancho},{alto});
    //console.log({fila});
    console.log({mapa})
    return [[' ']];
}

console.log(constructGraph([{x: -1, y: 5},{x: 3, y: 2}]));