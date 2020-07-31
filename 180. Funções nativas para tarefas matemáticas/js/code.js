function x(x) {
    return x;
}

function y(y) {
    return y
}

function z(z) {
    return z
}

function r(r) {
    return r
}

var x = x(Math.ceil(13.300))
var y = y(Math.floor(31.300))
var z = z(Math.round(9.300))
var r = r(Math.random())

document.write('Math.ceil: ' + x)
document.write('<br>')
document.write('<br>')
document.write('Math.floor: ' + y)
document.write('<br>')
document.write('<br>')
document.write('Math.round: ' + z)
document.write('<br>')
document.write('<br>')
document.write('Math.Random: ' + r)
