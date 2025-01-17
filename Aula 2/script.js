// Operadores Aritméticos
let numero = 5;
// console.log(numero + numero)
// console.log(numero - numero)
// console.log(numero * numero)
// console.log(numero / numero)
// console.log(numero % numero)

//Operadores de comparação
let variavel1 = 2; //number
let variavel2 = "2"; //string,texto
let variavel3 = 7;
let variavel4 = 2;

//console.log(variavel1, variavel2);
//console.log(variavel1 == 2); //true,  pois o valor que está sendo guardado na variável1 é o mesmo que 2
//console.log(variavel1 === variavel2); //false, pois são tipos diferentes, apesar de ter o mesmo valor que é o 2. 2 é diferente de "2".

//console.log(variavel1 != 2); //false, pq eles são iguais
//console.log(variavel2 != 2); //false, pq os valores são iguais

//console.log(variavel2 !== 2); //true, Apesar de ter o mesmo valor 2, um é string "2" e o outro é numérico 2.

//              2           7
//console.log(variavel1 > variavel3); //false, 2 não é maior que 7

//               7           2
//console.log(variavel3 > variavel1); //true, 7 é maior que 2

//console.log(variavel3 >= variavel1); // true, 7 é maior que 2, mas não é igual a 2.

//              2           2
//console.log(variavel1 < variavel4); //false 2 não é menor que 2
//console.log(variavel1 <= variavel4); //true, ele não é menor, mas é igual a 2

//if = Se
// sintáxe

// if (condição){
//     console.log ("retorno")
// }

let samuca = "back";
let kaka = "front";

//      true                true
if (samuca == "back" && kaka == "front") {
  // console.log("Aí vem o fullstack")
}

//      true                false
if (samuca == "back" || kaka == "back") {
  //   console.log("Aí vem o fullstack")
}

//else , senão. Retorna quando não for verdade

let numeroDaSorte = 10;

if (numeroDaSorte == 10) {
  console.log("Uhuulll, Arraial me espera!!");
} else {
  console.log("Vou ter que tomar banho de mangueira");
}

let carro = "uninho";
let placa = 1234;

//        true        e        false
if (carro === "uninho" && placa === "1234") {
  console.log("Fez uma boa compra");
} else {
  console.log("Você não fez uma boa compra");
}

//        true        ou         false
if (carro === "uninho" || placa === "1234") {
  console.log("Fez uma boa compra");
} else {
  console.log("Você não fez uma boa compra");
}

//Else if

let animal1 = "leão";
// let animal2 = "gato"
// let animal3 = "ovelha"
// let animal4 = "elefante"
// let animal5 = "pato"
// let animal6 = "jabuti"
// let animal7 = "cabra"

if (animal1 === "girafa") {
  console.log("Você ganhou 10");
} else if (animal1 === "leão") {
  console.log("Você ganhou 8");
} else if (animal1 === "macaco") {
  console.log("Você ganhou 5");
} else {
  console.log("Você foi enganado");
}

let idade = 47; //number
let humano = true; //boolean

//     falso            true
if (idade == 30 && humano == true) {
  console.log("Sou adulto");
} else if (idade == 47) {
  console.log("Tá tudo certo");
} else {
  console.log("Ainda não sou adulto");
}

