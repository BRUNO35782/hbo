var lamp = window.document.getElementById('lampada')




function ligar(){
    lamp.src = 'img/ligar.svg'
}

function desligar(){
    lamp.src = 'img/desligar.svg'
}

lamp.addEventListener('click', quebrar)
function quebrar(){
    lamp.src = 'img/quebrada.svg'
}