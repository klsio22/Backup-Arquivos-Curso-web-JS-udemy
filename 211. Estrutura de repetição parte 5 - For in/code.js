/* Execute o código no NODE JS */
var linha
linha = '-=-'.repeat(12)

//var listaConvidados = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria']

var listaConvidados = Array()

listaConvidados['a'] = 'Jorge'
listaConvidados[10] = 'Jamilton'
listaConvidados[true] = 'Ana'
listaConvidados['Zebra'] = 'José'
listaConvidados[-5] = 'Maria'

console.log(linha)

console.log(listaConvidados)

console.log(linha)

for (var x in listaConvidados) {
    console.log('Indice ' + x + ' Valor ' + listaConvidados[x])
}
console.log(linha)