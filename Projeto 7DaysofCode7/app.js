let primeiroNumero = parseInt(prompt("Digite o primeiro número: "));
let segundoNumero = parseInt(prompt("Digite o segundo número: "));

function soma(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
}

function subtracao(primeiroNumero, segundoNumero) {
    return primeiroNumero - segundoNumero;
}

function multiplicacao(primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero;
}

function divisao(primeiroNumero, segundoNumero) {
    return primeiroNumero / segundoNumero;
}

let operacao = prompt("Digite a operação desejada: \n 1 - soma \n 2 - subtração \n 3 - multiplicação \n 4 - divisão");
if (operacao == 1) {
    alert("O resultado da soma é: " + soma(primeiroNumero, segundoNumero));
} else if (operacao == 2) {
    alert("O resultado da subtração é: " + subtracao(primeiroNumero, segundoNumero));
} else if (operacao == 3) {
    alert("O resultado da multiplicação é: " + multiplicacao(primeiroNumero, segundoNumero));
} else {
    if (segundoNumero == 0) {
        alert("Não é possível dividir por zero");
    } else {
        alert("O resultado da divisão é: " + divisao(primeiroNumero, segundoNumero));
    }
}