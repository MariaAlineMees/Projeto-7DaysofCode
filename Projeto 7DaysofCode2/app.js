alert ("Boas vindas ao Quiz");
let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let preferencia = prompt(`Você gosta de estudar ${linguagem}? Responda 1 para sim e 2 para não.`);

if (preferencia == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}