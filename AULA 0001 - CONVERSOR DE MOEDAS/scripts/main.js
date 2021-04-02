
function calculaAnoLuz(){

  var anoLuz = parseFloat(document.getElementById("fAnoLuz").value);
  var anoLuzEmQuilom = 9460730472580.8;
  
  var resultado = alert("O valor de " + anoLuz + " ano-luz em quilometros é: " + (anoLuz * anoLuzEmQuilom).toFixed(2))


}



