function foco(){
    document.getElementById('campo').className = 'amarelo'
}

function semFoco(){
    var caracter;
    caracter = document.getElementById('campo').value 
    caracter.trim()
    srt = caracter.length

    //console.log(srt)

    if (srt < 3){
        document.getElementById('campo').className = 'vermelho'
    } else {
        document.getElementById('campo').className = 'verde'
    }
 


}