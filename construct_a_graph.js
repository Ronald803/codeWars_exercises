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
    if(points.length===0){return [["+"]]}
    let ancho = [0,0];
    let alto = [0,0];
    if(points.length===1){
        points[0].x>0 ? ancho = [0,points[0].x] : ancho = [-points[0].x,0]
        points[0].y>0 ? alto = [0,points[0].y] : alto = [-points[0].y,0]
    } else {
        // let x = [points[0].x,points[1].x]
        // let y = [points[0].y,points[1].y]
        // x.sort( (a,b)=> a-b )
        // y.sort( (a,b)=> a-b )
        // //console.log({x},{y});
        // x[0]<0 ? ancho = [-x[0],x[1]] : ancho = [0,x[1]]
        // y[0]<0 ? alto = [-y[0],y[1]] : alto = [0,y[1]]
        let anchura=[]
        let altura=[]
        points.map(p=>{
            anchura.push(p.x);
            altura.push(p.y)
        })
        anchura.sort((a,b)=> a-b)
        altura.sort((a,b)=> a-b)
        anchura[0]<0                ? ancho[0] = -anchura[0]                : ancho[0] = 0
        anchura[anchura.length-1]>0 ? ancho[1] = anchura[anchura.length-1]  : ancho[1] = 0
        altura[0]<0                 ? alto[0] = -altura[0]                  : alto[0] = 0
        altura[altura.length-1]>0   ? alto[1] = altura[altura.length-1]     : alto[1] = 0
        console.log({anchura},{altura});
    }
    let mapa = []
    function crearFila(a,b,c){
        let fila = []
        for(let i=0;i<a[0];i++){
            fila.push(b)
        }
        fila.push(c)
        for(let j=0;j<a[1];j++){
            fila.push(b)
        }
        return fila
    }
    for(let k=0;k<alto[1];k++){
        mapa.push(crearFila(ancho," ","|"))
    }
    mapa.push(crearFila(ancho,"-","+"))
    for(let l=0;l<alto[0];l++){
        mapa.push(crearFila(ancho," ","|"))
    }
    
    function posicionar(i,j){
        //console.log({i},{j});
        let aux = [0,0]
        //console.log({ancho},{alto});
        if(alto[1]===-1){alto[1]++}
        aux[0]=ancho[0]+i 
        aux[1]=alto[1]-j 
        return aux
    }
    for(let z=0;z<points.length;z++){
        const w = posicionar(points[z].x,points[z].y)
        mapa[w[1]][w[0]] = "*"
    }
    //console.log(posicionar(points[0].x,points[0].y));
    return mapa;
}

console.log(constructGraph([{x: -2, y: -2}, {x: 0, y: 0}]));