let altura = window.screen.availHeight
let largura = window.screen.availWidth

/* document.write('Altura do navegador é : ' + altura + '<br>')
document.write('Largura do navegador é : ' + largura + '<br>') */

if (largura < 500) {
    document.write('Logica para impressão do menu versão Mobile')
} else {
    document.write('Logica para impressão do menu versão WEB')
}