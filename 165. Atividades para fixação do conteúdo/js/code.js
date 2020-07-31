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

var idade;
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


