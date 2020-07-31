//console.log(document.getElementById('nome_usuario'))
//console.log(document.getElementsByTagName('input'))
//console.log(document.getElementsByClassName('campo_texto'))
//console.log((document.getElementsByName('nome')))


function bucadorCaracter() {
    //selecionar o valor digitado
    var caracter = document.getElementById('entrada').value
    //limpar o campo de digitação
    document.getElementById('entrada').value = ''

    //limpar espaços em nativos  
    // console.log(caracter)

    caracter.trim()

    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //adiconar o caracter no campo referencia a números
            document.getElementById('apenas_numeros').value += caracter
            break;
        default:
            //adicionar o caracter no campo referente a letras
        document.getElementById('apenas_letras').value += caracter
    }
}
