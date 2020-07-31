var x, resutado

function listaCoisas(x) {
    var lista_frutas = Array()

    lista_frutas[0] = 'Banana'
    lista_frutas[1] = 'Maça'
    lista_frutas[2] = 'Morango'
    lista_frutas[3] = 'Uva'

    var  pesquisa = lista_frutas.indexOf('Banana','Maça','Manga' )

    if (pesquisa === -1) {
        return 'Elemento não existe'
    } else {
        return ('elemento exite e está na posição ' + pesquisa)
    }

}
 resutado = listaCoisas(x)
 
console.log(resutado)