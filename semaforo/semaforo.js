
let contagem = 0

window.onload = function () {
    let intervalo = 0
    contagem++
    intervalo = setInterval(iContagem,100)
}

function iContagem() {
    
    contagem++

    if(contagem <= 30){
        document.querySelector('#branco').src = "semafaroverde.png"
    }

    if(contagem > 30 && contagem <=50){
        document.querySelector('#branco').src = "semafaroamarelo.png"
    }
    if(contagem > 50){
        document.querySelector('#branco').src = "semafarovermelho.png"
    }
    if(contagem == 80){
        contagem = 0
    }
    
}