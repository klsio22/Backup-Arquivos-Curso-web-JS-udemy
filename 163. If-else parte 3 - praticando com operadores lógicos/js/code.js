var nota, media, faltas, faltas_maximas;
nota = prompt('Digite A nota do Aluno : '); 
faltas = prompt('Digite a quantidae de faltas: ')

media = 7; faltas_maximas = 15;

/* if (nota >= media && faltas <= faltas_maximas) {
    document.write('Aprovado')
} else {
    document.write('Reprovado')
}
 */
var resultado = (nota >= media && faltas <= faltas_maximas) ? 'APROVADO': 'REPROVADO';

document.write(resultado)