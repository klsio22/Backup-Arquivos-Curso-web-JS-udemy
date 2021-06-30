let altura = 0,
    largura = 0,
    vidas = 1,
    tempo = 15,
    nivel = window.location.search,
    tempoMosquito = 1500;

nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    //1500
    tempoMosquito = 1500
} else if (nivel === 'dificil') {
    //1000
    tempoMosquito = 1000
} else if (nivel === 'chucknorris') {
    //750
    tempoMosquito = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function () {

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('tempo').innerHTML = tempo
    }

    tempo--

}, 1000)


function posicaoMosquito() {
    let posiçãoX, posiçãoY, removerMosquito;

    removerMosquito = document.getElementById('mosquito')

    if (removerMosquito) {
        removerMosquito.remove()

        let coracao = document.getElementById('v' + vidas)

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            coracao.src = 'img/coracao_vazio.png'
            vidas++
        }

    }

    posiçãoX = Math.floor(Math.random() * largura) - 90
    posiçãoY = Math.floor(Math.random() * altura) - 90

    posiçãoX = posiçãoX < 0 ? 0 : posiçãoX
    posiçãoY = posiçãoY < 0 ? 0 : posiçãoY

    console.log(posiçãoX, posiçãoY)
    //criar o elemento html
    let imgMosquito = document.createElement('img')
    imgMosquito.src = 'img/mosquito.png'
    imgMosquito.className = tamanhoAleatorio() + ' ' + ladoAletorio()
    imgMosquito.style.left = posiçãoX + 'px'
    imgMosquito.style.top = posiçãoY + 'px'
    imgMosquito.style.position = 'absolute'
    document.body.appendChild(imgMosquito)
    imgMosquito.id = 'mosquito'

    imgMosquito.onclick = function () {
        this.remove()
    }
}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }

}

function ladoAletorio() {
    let lado = Math.floor(Math.random() * 2)

    switch (lado) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}