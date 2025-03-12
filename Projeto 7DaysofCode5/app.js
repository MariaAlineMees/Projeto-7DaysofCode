alert ('Vamos fazer uma lista de compras?')
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let saladas = [];
let limpeza = [];
let outro = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";  // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
while(adicionarMais != "não"){
    adicionarMais = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarMais != "sim" && adicionarMais != "não") {  //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarMais === "não"){  //se o texto lido for "não", sair do while
        break;
    }
	
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria esse item se encaixa: 'frutas', 'laticínios', 'doces', 'congelados' 'saladas', 'limpeza' ou 'outro'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticínios'){
        laticinios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else if (categoria === 'saladas'){
        saladas.push(comida);
    } else if (categoria === 'limpeza'){
        limpeza.push(comida);
    } else if (categoria === 'outro'){
        outro.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Lista de compras: Frutas: ${frutas}  Laticínios: ${laticinios}  Doces: ${doces} Congelados: ${congelados} Saladas: ${saladas} Limpeza: ${limpeza} Outro: ${outro}`);