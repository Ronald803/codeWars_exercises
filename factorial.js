//Your task is to write function factorial.

function factorial(n){
    let result = 1;
    for(let i=n;i>0;i--){
        console.log({i});
        result = result*i
    }
    return result
}

console.log(factorial(0));