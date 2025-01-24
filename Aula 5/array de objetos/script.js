//Array de objetos  [{},{},{}]
//Exemplo 1 - Estilos musicais

//Cada bolsinha tem o seu índice
//rock 0, mpb 1, pagode 2
let estilosMusicais = [
  {
    estilo: "rock",
    surgiu: 1950,
    cantores: ["Chorão", "Rita Lee"],
  },

  {
    estilo: "mpb",
    surgiu: 1960,
    cantores: ["Elis Regina", "Caetano Veloso"],
  },

  {
    estilo: "pagode",
    surgiu: 1970,
    cantores: ["Péricles", "Thiaguinho"],
  },
];

//console.log(typeof(estilosMusicais)) //Saber o tipo - object

//console.log(estilosMusicais) //Mostrou todas as bolsas que estão guardadas na array, índice 0 - rock, índice 1- mpb, índice 2- pagode

//console.log(estilosMusicais[0]) //Mostra só o que tem na bolsa rock, pq ela é o índice 0

//console.log(estilosMusicais[3]) //undefined , não existe o índice 3, não existe a bolsinha 3

//console.log(estilosMusicais[2]) //Mostra só o que tem na bolsa pagode, pq ela é o índice 2

//console.log(estilosMusicais[1].estilo) //Mostra somente o estilo que tem na bolsa 1 -MPB

//console.log(estilosMusicais[2].surgiu) //Mostra somente o surgiu que tem na bolsa 2 - PAGODE

//console.log(estilosMusicais[0].cantores[1])

//console.log(estilosMusicais[2].cantores[0])

//-------------------------------------------

//Exemplo 2 - A senhora da feira

let carrinho = [
  {
    barraca: `peixes`,
    vendedor: "João",
    produtos: ["sardinha", "corvina"],
  },
  {
    barraca: `Temperos`,
    vendedor: "Maria",
    produtos: { produto1: "páprica", produto2: "cominho" },
  },

  {
    barraca: "Legumes",
    vendedor: "José",
    produtos: ["cenoura", "abobrinha"],
  },
];

console.log(carrinho); //Mostra as 3 bolsas
console.log(carrinho[1].produtos.produto2); //Entra na bolsa de índice [1], acesse a bolsinha produtos.pegue o produto2 - cominho

console.log(carrinho[2].vendedor); //Mostra o José
