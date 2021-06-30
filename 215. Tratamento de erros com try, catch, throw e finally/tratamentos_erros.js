// netflix

var video = Array()
video[1] = Array()
video[1]['nome'] = 'Fullmetal Alchemist'
video[1]['categoria'] = 'Anime'

function getVideo(video) {
    try {
        //logica

        //htt
        console.log(video[1]['nome'])
        console.log(video[0]['categoria'])
    } catch (erro) {
        tratarErro(erro)
        console.log('Algo não está funcinando corretamente')
        //throw new Error ('Houve um erro mas estamos trabalhando para resolve-lo')
    } finally {
        console.log('Sempre passa por aqui(try/catch)')
    }

}


function tratarErro(e){
    console.log(e+'')
}

getVideo(video)

