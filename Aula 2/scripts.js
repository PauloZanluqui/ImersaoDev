var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
var segundoValor = parseInt(prompt("Digite o segundo valor: "))
let result
var operacao = parseInt(prompt("Digite 1 para divisão, 2 para multiplicação" +
                                ", 3 para adição ou 4 para subtração: "))
if(operacao == 1){
    result = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + result + "</h2>")
}else if(operacao == 2){
    result = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + result + "</h2>")
}else if(operacao == 3){
    result = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + result + "</h2>")
}else if(operacao == 4){
    result = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + result + "</h2>")
}else{
    document.write("<h2>Opção inválida</h2>")
}

