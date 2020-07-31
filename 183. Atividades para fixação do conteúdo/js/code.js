var num1, num2, operacao, resultado;
alert('Cálculo aritméticos de soma e subtração.')
alert('Observação Digite (soma) para soma ou (sub) para subtração')
operacao = prompt('Qual operação deseja realizar (soma) ou (sub) : ').toLowerCase()

num1 = parseFloat(prompt('Digite o primeiro número da Operação: '))
num2 = parseFloat(prompt('Digite o segundo número da Operação: '))


/* if (operacao == 'soma') {
    function calculo(num1, num2) {
        return num1 + num2
    }
} else if (operacao == 'sub') {
    function calculo(num1, num2) {
        return num1 - num2
    }
} else {
    document.write('ERRO : Recarege a pagina e tente novamente!')
}

resultado = calculo(num1, num2)

document.write('O Resultado é: ' + resultado)
 */

function calculo(num1, num2, operacao) {
    if (operacao == 'soma') {
        return num1 + num2
    } else if (operacao == 'sub') {
        return num1 - num2
    }
}

resultado = calculo(num1, num2, operacao)

if (resultado === undefined){
    document.write('ERRO : Recarege a pagina e tente novamente!')
} else {
    document.write('O Resultado é: ' + resultado)
}
