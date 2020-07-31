/* 
var nota, media, faltas, faltas_maximas;
nota = prompt('Digite A nota do Aluno : '); 
faltas = prompt('Digite a quantidae de faltas: ')

media = 7; faltas_maximas = 15;

if (nota >= media && faltas <= faltas_maximas) {
    document.write('Aprovado')
} else {
    document.write('Reprovado')
}

var resultado = (nota >= media && faltas <= faltas_maximas) ? 'APROVADO': 'REPROVADO';

document.write(resultado) 
*/

/* var idade;
idade = prompt('Digite a idade : ') 

if (idade >= 0 && idade < 15){
    document.write('Criança')
} else if ( idade > 15 && idade < 30) {
    document.write('Jovem')
} else if ( idade > 30 && idade < 60) {
    document.write('Adulto')
} else if (idade >= 60 ){
    document.write('Idoso')
}

 */
var opcao;
opcao = parseInt(prompt('Escolha uma opção por gentileza entre 1 e 3:'))

switch (opcao) {
    case 1:
        // se paramentro === 1 
        document.write('Você escolheu a primeira opção 1')
        break
    case 2:
        //se paramentro === 2
        document.write('Você escolheu a primeira opção 2')
        break
    case 3:
        //se paramentro === 3 
        document.write('Você escolheu a primeira opção 3')
        break
    default:
        // se parametro não encontrad
        document.write('Você não digitou nenhuma das opções')
        break
}





