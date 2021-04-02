var valorEmDolar = prompt("Qual o valor em dolar que você quer converter?")

var valorEmDolarNum = parseFloat(valorEmDolar)

var valorEmReal = valorEmDolarNum * 5.50
valorEmReal = valorEmReal.toFixed(2)

alert(valorEmReal)