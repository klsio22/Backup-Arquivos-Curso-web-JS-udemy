var x, y, resultado, resultado02

function listaFrutas(x) {

    var lista_frutas, ordenacao

    lista_frutas = Array()


    lista_frutas[0] = 'Maça'
    lista_frutas[1] = 'Banana'
    lista_frutas[2] = 'Uva'
    lista_frutas[3] = 'Morango'

    ordenacao = lista_frutas.sort()

    return ordenacao
}

resultado = listaFrutas(x)

console.log(resultado)

/* --------------------------------- */

function listaNumeros(y) {
    var lista_numeros, ordenacao2

    lista_numeros = Array()

    lista_numeros[0] = '12'
    lista_numeros[1] = '40'
    lista_numeros[2] = '3'
    lista_numeros[3] = '7'
    lista_numeros[4] = '19'
    lista_numeros[5] = '1'
    lista_numeros[6] = '8'

    /* lista_numeros.sort(function (a, b) {
        return a - b
    });
    */

    /* ordenacao2 = lista_numeros.sort(function (a, b) {
        return a - b
    } */

    ordenacao2 = lista_numeros.sort(ordenaNumeros)

    function ordenaNumeros(a, b) {
        return a - b
        // < 0 = a ordenado antes de b
        // > 0 = b ordenado ante de a 
        // == ordem é mantida
    } 

    return ordenacao2
}

resultado02 = listaNumeros(y)

console.log(resultado02)