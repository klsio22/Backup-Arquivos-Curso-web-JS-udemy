function exibirArtigo(id, callbackSucesso, callbackErro) {
    // Lógica : recuperar o id via requisição http

    if (true) {
        callbackSucesso('Função de callback em JS', 'Funções de Callback são muito usadas....')
    } else {
        callbackErro('Erro ao recuperar os dados')
    }


}

var callbackSucesso = function (titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr>')
    document.write('<h2>' + descricao + '</h2>')
}

var callbackErro = function (erro) {
    document.write('<p>'+ erro +'</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro)
