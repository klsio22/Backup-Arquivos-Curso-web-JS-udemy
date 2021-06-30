/* Execute o código no NODE JS */
var linha
linha = '-=-'.repeat(12)

console.log(linha)
for (var l = 1; l <= 10; l++) {//for para percorrer as tabuadas 

    for (var c = 1; c <= 10; c++) {//for para percorrer os os valores da tabuada
        console.log(l + ' x ' + c + ' = ' + (l * c))
    }

    console.log(linha)
}


