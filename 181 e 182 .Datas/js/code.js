/* var data = new Date();
/* 
dia = data.getDate(); mes = data.getMonth() + 1; ano = data.getFullYear();

document.write('Data do seu sistema: 0' + dia + '/0'+ mes +'/' + ano)
 
//Adiconar / remover dias

document.write('Adiconar / remover meses <br><br>')
document.write(data.toString())
data.setDate(data.getDate() - 366)
document.write('<hr/>')
document.write(' Setando o objeto Date <br><br>')
document.write(data.toString())

//Adiconar / remover meses
document.write('<br><br><hr/>')
document.write('Adiconar / remover meses <br><br>')
document.write(data.toString())
data.setMonth(data.getMonth() - 3)
document.write('<hr/>')
document.write(' Setando o objeto Date no mês <br><br>')
document.write(data.toString())


//Adiconar / remover Anos
document.write('<br><br><hr/>')
document.write('Adiconar / remover meses <br><br>')
document.write(data.toString())
data.setFullYear(data.getFullYear() - 2)
document.write('<hr/>')
document.write(' Setando o objeto Date no mês <br><br>')
document.write(data.toString())
 */


//new Date(year, month, day, hours, minutes, seconds, milliseconds)

// 15/07/2020

var data1 = new Date(2020, 6, 06)


//23/08/2020
var data2 = new Date(2020, 7, 05)
document.write('<hr/>')
document.write(data1.toString())
document.write('<hr/>')
document.write(data2.toString())


//converter para algo que possamos calcular
document.write('<br><br><hr/>')
document.write(data1.getTime())
document.write(`<hr />`)
document.write(data2.getTime())

//1 de Janeiro de 1970

//encontrar a qtde de millissegundos entre data1 e data2
document.write('<br><br><hr/>')

var millissegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime())
document.write(millissegundosEntreDatas)

/*
    1 dia tem 24 horas, cada hora tem 60 minutos,
    cada minuto tem 60 segundos
    cada segundo tem 1000 milissegundos
    Ent'ao quantos milissegundos existem em um dia ?
*/

var milissegundosDia = (1 * 24 * 60 * 60 * 1000)
document.write('<br><br><hr/>')
document.write('1 dia tem : ' + milissegundosDia + ' milissegundos')

document.write('<br><br><hr/>')
document.write('A diferença entre data 01 e data 02 é de ' +
    millissegundosEntreDatas / milissegundosDia + ' dia(s)')
