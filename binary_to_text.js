// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).
// Each 8 bits on the binary string represent 1 character on the ASCII table.
// The input string will always be a valid binary string.
// Characters can be in the range from "00000000" to "11111111" (inclusive)
// Note: In the case of an empty binary string your function should return an empty string.

function binaryToString(binary){
    let array = []
    let bin = binary.split("")
    let a = []
    for(let i=1;i<=bin.length;i++){
        a.push(bin[i-1])
        if(i%8===0){
            array.push(a);
            a = [];
        }
    }
    function binToNumber (arr){
        let final = 0;
        for(let i=0; i<8 ; i++){
            final=final+arr[i]*(2**(7-i))
        }
        return final
    }
    a=[]
    array.map(element=>{a.push(binToNumber(element))})
    console.log({a});
    array=[];
    let str = "";
    a.map(element=>{
        str=str+String.fromCharCode(element)
    })
    console.log({str});
}


console.log(binaryToString('001111000011101000101001'));