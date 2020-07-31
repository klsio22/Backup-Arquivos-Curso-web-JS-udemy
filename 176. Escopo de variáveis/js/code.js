/* // 3 escopos global , função  , bloco

var serie = 'Friends'; // escopo global

//escopo de bloco : disponibiliza sua variável para o escopo global 
if (true) {
    var serie2 = ' Game of Thrones'
    document.write(serie)
}

document.write(serie2)

document.write('<br>')

//escopo da função
function x() {
    var serie3 = 'breaking bad'
    document.write(serie)
    document.write(serie2)

}

//fim do escopo da função
x()
 */

var variavelGlobal = 'Variavel Global'


function imprimir (x) {
    var dentroFuncao = ' Dentro da função , fora do if';

    if(variavelGlobal){
        var dentroIF = 'Dentro do if da função'
        console.log(variavelGlobal);//imprime global
        console.log('Imprimindo a variavel dentroFuncao no IF -> '+ dentroFuncao)
        
    }

    console.log(dentroIF)
    console.log('Imprimindo a variavel dentroFunção')

    {
        console.log('Dentro do bloco da função, imprimindo dentroIF' + dentroIF)
    }
    return dentroFuncao
}

var x = imprimir(x) // método de chamada da Função 

console.log('Tentando imprimir a váriavel if da Função imprimir: '+ x )


