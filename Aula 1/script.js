//Case Sensitive: O uso de letras maiúsculas e minúsculas faz diferença.
let Nome = "AdrIanO";
let nome = "Adriano";
let NOME = "Jesus";

// console.log(Nome)
// console.log (nome)
// console.log (NOME)

//Camel Case: É uma escrita que lembra a corcunda de um camelo. A primeire palavra minúscula, a primeira letra das palavras seguintes, maiúsculas.
let sobreNome = "Jesus";

//Símbologia nas variáveis, somente _ e $

let _nome = "Melany";
let $nome = "Lucas";

//Redeclarando Variáveis
$nome = "Otavio";
//console.log($nome)

//CONST
const anoNascimento = 2005; //Tipo numérico
const _anoNascimento = "2005"; //Tipo string (textual)

//Const não pode ser redeclarada

//anoNascimento = 2010 //Não posso redeclarar uma constante, pq ela não pode ser modificada.
//console.log(anoNascimento)

//_anoNascimento = "2020"
//console.log(_anoNascimento)

//-----------------------
let idade = 30; //Tipo numérico, não é envolvido por aspas

let fruta = "abacaxi"; //Tipo string/textual São atribuidas com '', "" ou `` aspas simples,duplas ou crase
let animal = "cachorro"; //aspas simples
let cor = `vermelho`; //crase

let brasileiro = true; //Tipo boleano verdadeiro ou falso
let estrangeiro = false;

//Depois que testar o código com o console log, não esquecer de apagar.
// console.log(idade)
// console.log(fruta)
// console.log(animal, cor, brasileiro, estrangeiro)

//Saber o tipo da variável
//console.log(typeof anoNascimento)
//console.log(typeof _anoNascimento)
//console.log(typeof brasileiro)

//Template string  `${}` é uma forma mais elegante de escrever uma string (texto)

let informacoes = `Tenho ${idade} anos, amo comer ${fruta} , tenho um ${animal} da cor ${cor} e é ${brasileiro}`;
console.log(informacoes);

let carro = "uninho";
let carro2 = "celtinha";
let carros = `${carro} e ${carro2}`; //Se for templatestring, precisa ter crase ` `

console.log(carros);

//Alguns Tipos de erros e mensagens

let tipo = null; // Está vazio de propósito. Não há um valor agora.
console.log(tipo);

let _tipo = undefined; //Algo sem valor.
console.log(_tipo);

let $tipo = NaN; //NaN not a number , não é um valor numérico. Lida com erros numéricos.
console.log($tipo);

