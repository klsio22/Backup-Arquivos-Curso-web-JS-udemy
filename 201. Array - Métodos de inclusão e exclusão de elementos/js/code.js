function ListaUnidimencional(lista_frutas) {

    /* var lista_frutas = Array()

    lista_frutas[0] = 'Banana'
    lista_frutas[1] = 'Maça'
    lista_frutas[2] = 'Uva' */

    var lista_frutas = ['Banana', 'Maça', 'Uva']

    /* ---------------------------------------- */
    // incluir elementos no final do Array
    lista_frutas.push('Manga')

    /* ---------------------------------------- */
    //incluir elementos no inicio do Array
    //lista_frutas.unshift('Morango')

    /* ---------------------------------------- */
    //excluir elemento do final do array
    //lista_frutas.pop()

    /* ---------------------------------------- */

    ////excluir elemento do inicío do array
    lista_frutas.shift()
    /* ---------------------------------------- */
    return lista_frutas

}

document.getElementById('lista1').innerHTML = ListaUnidimencional()
