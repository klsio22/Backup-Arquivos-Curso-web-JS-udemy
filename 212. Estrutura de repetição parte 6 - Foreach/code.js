var listaFuncionarios = ['Viviane', 'Rosêngela', 'Miguel', 'Lucas', 'Fernada']

console.log(listaFuncionarios)
console.log();

listaFuncionarios.forEach(function (elemento, indice, array) {//elemento = ao valor da array
    //logica
    console.log('Indice ' + indice + '| elemento: '+ elemento)

     if (elemento == 'Lucas'){
        array[indice] = 'João'
    } 
    
})
console.log();
console.log(listaFuncionarios)