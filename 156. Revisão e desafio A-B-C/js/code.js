var a = 10
var b = 20
var c = null

document.write('A: '+ a + ' <br/>' )
document.write('B: '+ b + ' <br/>' )
document.write('C: '+ c + ' <br/>' )

/* Logica aqui */ 

var c = a // c = 10
var a = b // a = 20
var b = c // b = 10
var c = null

document.write('<hr/>')
alert("Trocando os valores")

document.write('A: '+ a + ' <br/>' )
document.write('B: '+ b + ' <br/>' )
document.write('C: '+ c + ' <br/>' )