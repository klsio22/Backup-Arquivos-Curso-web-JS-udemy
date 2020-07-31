//void fução que executa , mas não tem retorno
//retorno fução que executa e tem um retorno

/* 

var largura = parseFloat(prompt('Digite a largura em metros'))
var comprimento = parseFloat(prompt('Digite o comprimento em metros'))

var area = calcularAreaTerreno(largura, comprimento)

function calcularAreaTerreno(largura, comprimento) {
    // Lógica
    
    var area = largura * comprimento
    return area
}

document.write('O terreno possui ' + area + ' metros quadrados')
 */

var lag, com;

lag = prompt('Digite a largura(m): ')
com = prompt('Digite o comprimento(m): ')
/* 
if (lag != null && com != null) {
    lag = parseFloat(lag);
    com = parseFloat(com);
}  */

function calcular(lag, com) {

    lag = lag === undefined ? 0 : lag
    com = com === undefined ? 0 : com
    /* if (lag === undefined && com === undefined) {
        lag = 0
        com = 0
        var area = lag * com
    } else {
        var area = lag * com
    } */
    return lag * com
}

calcular = calcular(lag, com)

document.write('O resultado é ' + calcular + 'm')

console.log(typeof(lag))
console.log(typeof(com))
