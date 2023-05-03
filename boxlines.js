// Given a X*Y*Z box built by arranging 1*1*1 unit boxes, write a function f(X,Y,Z) that returns the number of edges (hence, boxlines) of length 1 (both inside and outside of the box)
// Notes
// Adjacent unit boxes share the same edges, so a 2*1*1 box will have 20 edges, not 24 edges
// X,Y and Z are strictly positive, and can go as large as 2^16 - 1
function f(x,y,z){
    //TODO:Your code here
    let ejeX = x;
    let ejeY = (y+1)*x+y*(x+1)
    let ejeZ = (z+1)*ejeY+(x+1)*(y+1)*z
    console.log({x},{ejeY},{ejeZ});
    return ejeZ
}
console.log(f(1,2,3));