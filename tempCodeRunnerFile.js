    let array = numList.sort((a,b)=>a-b)
    console.log({array});
    let newArray = []
    function existe(i){
        let aux=-1
        newArray.map((e,index)=>{
            if(e[0]===i){aux=index}
        })
        return aux
        //return newArray.some( element=>{return element[0]===i})        
    }
    for(let i=0;i<array.length;i++){
        console.log(existe(array[i]),array[i])
        let index = existe(array[i])
        if(index>=0){
            console.log("si existe");
            newArray[index][1]=newArray[index][1]+1
        } else {
            newArray.push([array[i],1])
        }
    }
    console.log({newArray});
    let suma=0
    newArray.map(e=>{
        if(e[1]===1){
            suma=suma+e[0]
        }
    })
    console.log({suma});
    return suma