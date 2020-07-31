var objetos, resultado

objetos = Array('Cadeira ', 'impressora ', ' Garfo ')

function adicionarObjetos() {

    var objeto = document.getElementById('objeto').value

    if (objeto == '') {
        alert('Informe um valor válido')
    } else {
        var pesquisa = objetos.indexOf(objeto)

        if (pesquisa !== -1) {
            alert('Valor Já foi adicionado')
        } else {
            objetos.push(objeto)
            console.log(objetos)
            document.getElementById('objeto').value = ''
        }

    }

}

function ordenarObjetos() {
    var ordenar = objetos.sort()
    console.log(ordenar)
}

function MostrarLista(){
   
    lista.innerHTML = objetos


}