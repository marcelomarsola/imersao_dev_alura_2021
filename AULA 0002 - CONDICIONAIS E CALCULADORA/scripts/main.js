function apagar() {
    console.log("A função apagar está funcionando. E vc clicou no botão CE !")
    document.getElementById("inNumber").value = ""
}


function operador(valor) {
    document.getElementById("inNumber").value = document.getElementById("inNumber").value + valor
}


function resultado() {
    var resultadoConta = document.getElementById('inNumber').value
    console.log(resultadoConta)
    if(resultadoConta){
        document.getElementById("inNumber").value = eval(resultadoConta)
    } 
}