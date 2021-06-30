/* 
setTimeout(function () {
    document.write('test')
}, 2000) */

/* let i = 100

setInterval(function () {
    document.write(`${i}<br/>`)
    i --
}, 1000) */

let i = 5

let x = setInterval(function () {
    document.write(`${i} <br/>`)
    i--

    if (i === 0 ) {
        //window.location.reload(x)
        clearInterval(x)
    }   
}, 1000)