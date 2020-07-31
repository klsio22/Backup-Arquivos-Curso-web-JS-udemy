var nome, altura, peso, imc;

nome = prompt('Digite o seu nome : ').toUpperCase();
altura = parseFloat(prompt('Digite a sua altura: '));
peso = parseFloat(prompt('Digite o seu peso: '))
//imc = Math.round((peso / (altura ** 2)) * 100) / 100;
imc = (peso / ((altura / 100) ** 2)).toFixed(2) //imc.tofixed para arredodamento de numbers

if (imc >= 0 && imc <= 16) {
    classificacao = ' baixo peso, Muito Grave!';
} else if (imc >= 16 && imc <= 16.99) {
    classificacao = ' Baixo Peso, grave!';
} else if (imc >= 17 && imc <= 18.49) {
    classificacao = 'Peso baixo!';
} else if (imc >= 18.50 && imc <= 24.99) {
    classificacao = ' Peso normal!';
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = ' Sobrepeso!';
} else if (imc >= 30 && imc <= 34.99) {
    classificacao = ' Obesidade Grau I !';
} else if (imc >= 35 && imc <= 39.99) {
    classificacao = ' Obesidade Grau II !';
} else if (imc > 40) {
    classificacao = ' Obesidade Grau III!';
}

document.write(nome + ' Você tem o imc de ' + imc + ' Sendo classificado como' + classificacao)
