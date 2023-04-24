// These are the languages of the possible people you met the night before:
// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes
// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests
function validateHello(greetings) {
    let greets = ["hello","ciao","salut","hallo","hola","ahoj","czesc"]
    let arrWords = greetings.toLowerCase().split(" ")
    let arrayAux = []
    arrWords.map(element=>{
        arrayAux.push(element.replace(/[^a-zA-Z]/g, ""))
    })
    function isGreeting(word){
        return greets.some(function(element){return element===word})
    }
    arrWords = [];
    arrayAux.map(element=>{arrWords.push(isGreeting(element))})
    console.log({arrWords});
    return arrWords.some(function(element){return element===true})
}

console.log(validateHello("wIe tReS HaStA WIe bieN. CzEsC, tsChusS La bieN? Hombre HomBrE! BiEN;"));