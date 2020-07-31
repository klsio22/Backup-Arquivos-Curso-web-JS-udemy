/* //void fução que executa , mas não tem retorno
//retorno fução que executa e tem um retorno



var largura = parseFloat(prompt('Digite a largura em metros'))
var comprimento = parseFloat(prompt('Digite o comprimento em metros'))

var area = calcularAreaTerreno(largura, comprimento) //método de chamada da função

function calcularAreaTerreno(largura, comprimento) {
    // Lógica
    
    var area = largura * comprimento
    return area
}

document.write('O terreno possui ' + area + ' metros quadrados')

 */

function soma(a, b) {
    b = b === undefined ? 0 : b
    a = a === undefined ? 0 : a
    return a + b
}

console.log(soma(7, 7))
console.log(soma(7, 7))
console.log(soma(7))
console.log(soma())
