// // let aluna = "Carol" //Uma caixinha que está guardando um único valor

// // //Objeto {} é uma coleção de informações ou propriedades. As propriedades podem ser de diferentes tipos de dados.

let eu = {
  nome: "Karynne",
  sobrenome: "Moreira",
  nascimento: 2000,
};

//Adicionando uma propriedade 
//eu = objeto  fruta = propriedade  goiaba = valor

eu.fruta = "goiaba"; //No objeto "eu", crie uma propriedade chamada fruta e ela vai receber o valor "goiaba"

//Adicionando uma propriedade 
eu.amigo = "Samuca";
console.log(eu);

//Deletando através do operador delete

delete eu.fruta; //deleta a propriedade fruta
//console.log(eu)

// -----

let carrinho = "uninho"; //guardando apenas uma informação

//guardando várias informações
let carro = {
  marca: "Fiat",
  modelo: "Uninho",
  peso: "50kg",
  pesoComEscada: "65kg",
  velocidadeComEscada: "1000km/h",
  cor: "branco",
  preco: 50000,
};

console.log(typeof carro.preco);

console.log(carro.velocidadeComEscada);

delete carro.pesoComEscada;

carro.passageiro = "Betinho Carlos";
console.log(carro);

//Exemplo com objeto dentro de objeto
let alunos = {
  nome: "Carol",
  idade: 18,
  cor: "rosa",
  nacionalidade: "brasileira",
  professor: true,
  filhos: { filha1: "Débora", filha2: "Dafne" },
};

console.log(alunos);
console.log(alunos.filhos.filha1); //MOSTRAR A FILHA 1

//Exemplo 2, objetos dentro de objetos
let minhaHonda = {
  cor: "vermelho",
  rodas: 4,
  motor: { cilindros: 4, tamanho: 2.2 },
};

console.log(minhaHonda);
console.log(minhaHonda.motor); //MOSTRAR O QUE TEM DENTRO DO OBJETO MOTOR

// //Array [] Array são estruturas que permitem armazenar diversos tipos de dados, diferentes ou não. Pode colocar quantos itens quiser, é infinito.

// //Começando do índice 0
// //  0           1          2
// //x tudo , video game, churrasco ...
let compras = [
  "x tudo", //0
  "video game", //1
  "churrasco", //2
  "uninho com escada",
  "sorvete",
  "água de coco",
  "café",
  "água gelada",
  "pao de alho",
  "farofa",
  `bebida`,
  "pagode",
  "coquinha gelada",
  "Ar condicionado",
  "mate da praia",
  2025,
];

compras.push("pizza"); //Método push adiciona um item no final da array []

compras.unshift("piscina"); //Método unshift adiciona um item no início da array [ ] //índice 0

compras.pop(); //Método pop, remove o último item da array

compras.shift(); //Método shift, remove o primeiro item da array

//Alguns métodos especiais

//A propriedade lenght retorna o número de elementos em um array []
// console.log(compras.length)


