/* Execute o código no NODE JS */
let linha, l = 1, c
linha = '-=-'.repeat(12)

console.log(linha)
//Tabuada usando o o while

while (l <= 20) {
    c = 1
    while (c <= 10) {

        console.log(l + 'x' + c + '=' + (l * c))
        c++
    }

    console.log(linha)
    l++
}


/* for (var l = 1; l <= 10; l++) {//for para percorrer as tabuadas

    for (var c = 1; c <= 10; c++) {//for para percorrer os os valores da tabuada
        console.log(l + ' x ' + c + ' = ' + (l * c))
    }

    console.log(linha)
}
 */

