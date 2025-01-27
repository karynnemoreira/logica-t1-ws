//Estrutura básica de uma função tradicional

//function: Palavra chave usada para criar a função

//nomeDaFuncao: Esse nome é o nome da função. Geralmente, escolhemos um nome que descreva o que a função faz, como: mostrarMensagem, calcularSoma, mostrarDesenho

//Parentênteses() É onde colocamos os parâmetros(ou seja, os valores que a função vai receber)

//chaves {} Dentro das chaves fica o código que a função vai executar

//sintaxe da função tradicional

function nomeDaFuncao() {
  //Código que vai ser executador/ Retorno/Return da função
}

nomeDaFuncao(); //Para ativa-la precisamos chama-la (invocando/ativando)

//-------EXEMPLOS-----
//Exemplo com a sintaxe básica, mostrando a mensagem "Sextou, galerinha!"

//Exemplo 1
function mensagem() {
  //console.log("Sextou, galerinha!");
}

mensagem();

//Exemplo 2

function bomDia() {
  // console.log("Bom dia!!");
}

bomDia();

//Função utilizando parâmetros e argumentos

//Parâmetros são os valores que a função espera receber ()
//Argumentos são os valos que são passados para a função, preenchendo os marcadores de posição definidos pelos parâmetros ()

//Nesse exemplo, reservamos o parâmetro para receber o valor (reservado), porém ainda não sabemos qual é esse valor. Damos o valor dentro do parâmetro de ativar a função.

function mostrarFruta(fruta) {
  // console.log(fruta);
}

mostrarFruta("uva");

//Exemplo 2

function mostrarAnimais(animal1, animal2, fruta) {
  // console.log(animal1, animal2, fruta);
}

//mostrarAnimais("cachorro", "gato", "abacaxi")

//Exemplos com operadores matemáticos

//soma

//                     6                       9
function soma(reservadoParaONumero1, reservadoParaONumero2) {
  //console.log(reservadoParaONumero1 + reservadoParaONumero2); //6+9
}

soma(6, 9);

//----subtração

function subtracao(a, b) {
  // console.log(a - b); //A está recebendo o valor 6, B está recebendo o valor 9 = 6-9 = -3
}
subtracao(6, 9);

//----multiplicação
//() Parâmetro da função
//{} Retorno da função

function multiplicacao(a, b) {
  //console.log(a * b);
}

multiplicacao(6, 8);

//divisão

function divisao(a, b) {
  // console.log(a / b);
}

divisao(14, 3);

//Função anônima: É uma função que não tem nome, ou seja, você cria uma função e não dá um nome pra ela.

const somar = function (a, b) {
  return a + b;
};

//console.log(somar(2, 3));

//Ex2 - função anônima

const comprarIngresso = function (nome, idade) {
  //console.log(nome, idade);
};

//comprarIngresso("Mariah", 22)
comprarIngresso("Samuca", 16);

//Utilizando LET , com const não conseguimos reatribuir um outro valor, pois ela é constante.
//Utilize const para ter uma maior segurança.

let feira = function (fruta, legume) {
  // console.log(fruta, legume);
};

feira("uva", "cenoura");
feira = "Isso é um erro";

//console.log(feira);

//Ex3 - função anônima

const informacoes = function (nome, idade, cidade) {
  // console.log(nome);
  // console.log(idade);
  // console.log(cidade);
  // console.log(nome, idade,cidade)
};

informacoes("Lua", "8 anos", "Rio de Janeiro");

//ARROW FUNCTION => Função de flecha ()=>{}

//variável const, nome da variável nome  = recebe uma arrow function ()=>{}

const nome = (nome) => {
  console.log(nome);
};
nome("Letícia");

//Ex 1
const diminuir = (n1, n2) => {
  return n1 - n2;
};

console.log(diminuir(7, 2));

//Ex 2,  Mais compacto e simples sem a necessidade de utilizar return ou chaves {}

const arrowFunction = (n1, n2) => n1 + n2;
console.log(arrowFunction(10, 6));


//Declarando uma arrowFunction dentro de uma outra função

function funcaoPai() {
  const arrow = () => {
    console.log("oi");
  };

  arrow();
}

funcaoPai();

//Exemplo 2

function TranquiloKaka() {
  const DeBoas = () => {
    const messagem = "Tchau Kaka!, até quarta";
    console.log(messagem);
  };

  DeBoas();
}
TranquiloKaka();
