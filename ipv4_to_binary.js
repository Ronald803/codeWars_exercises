//Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).
//1st octet 128 has the binary representation: 10000000
//2nd octet 32 has the binary representation: 00100000
//3rd octet 10 has the binary representation: 00001010
//4th octet 1 has the binary representation: 00000001
//So 128.32.10.1 == 10000000.00100000.00001010.00000001
//Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.
//Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.
//Example
//"128.32.10.1" => 2149583361

function ipToInt32(ip){
    let array = ip.split(".")
    console.log({array});
    let binario = []
    array.map( element => {
        var decimal = element
        var resultado = "";
        while(decimal > 0){
            resultado = (decimal % 2) + resultado;
            decimal = Math.floor(decimal / 2)
        }
        binario.push(resultado)
    })
    //console.log({binario});
    binario.map( (element,index) => { array[index] = element.split("") })
    //console.log({array});
    for(let i=3 ; i>=0 ; i--){  // i = 3, 2, 1, 0 
        console.log(array[i].length);
        const size = 8-array[i].length
        for(let j=0;j<size;j++){ array[i].unshift("0") }
    }
    console.log({array});
    binario=[]
    array.map(element=>{
        binario.push((element.join("")))
    })
    binario = binario.join("")
    console.log({binario});
    let final=0
    for(let k=0;k<binario.length;k++){
        final=final+binario[binario.length-1-k]*2**(k)
        //console.log(binario[k]*2**(k), {k});
        //console.log({final});
    }
    console.log({final});
    return final
}

console.log(ipToInt32("128.32.10.1"),"Aasdf");