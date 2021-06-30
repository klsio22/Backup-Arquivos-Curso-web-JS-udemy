/* Execute o código no NODE JS */


var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maça'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

console.log(lista_frutas.length)//Tamanho da lista , a quantidade de elementos 

y = 0
console.log()

/* while (y < lista_frutas.length) { // lista_frutas.length = 4
    console.log(lista_frutas[y]) // y representa a possição  do elemento da lista  
    // document.write(lista_frutas[y]) 
    y++
} */

for (var c = 0 ; c < lista_frutas.length;c++){ // A mesma repetição usando o For 
    console.log(lista_frutas[c])
}



console.log()

