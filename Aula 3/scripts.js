var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while(tentativas != 0){
    var chute = parseInt(prompt("Digite um numero entre 0 e 10"))

    if (numeroSecreto == chute){
        alert("Acertou")
        break;
    } else if (chute > numeroSecreto){
        alert("O número secreto é menor")
        tentativas--
    } else if (chute < numeroSecreto){
        alert("O número secreto é maior")
        tentativas--
    }
}


if(chute != numeroSecreto){
    alert("Suas tentativas acabaram, o número secreto era: " + numeroSecreto)
}