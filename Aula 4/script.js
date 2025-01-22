//Métodos é um gatilho de uma função que já tem uma funcionalidade embutida em js. Métodos de inclusão e exclusão de itens.

//Métodos de array, relembrando esses 4 métodos
//push()  Adiciona o item no final do array
//unshift() Adiciona o item no início do array
//pop() Remove o último item do array
//shift() Remove o primeiro item do array

let cantoras = [
  "Beyoncé", //0
  "Alicia Keys", //1
  "Jennifer Lopez", //2
  "Shakira", //3
  "Madonna", //4
  "Avril Lavigne", //5
  "Mariah Carey", //6
  "Pink", //7
  "Britney", //8
  "Ariana Grande", //9
  "Lary Gaga", //10
];

//console.log(cantoras.length); //Mostra a quantidade de itens/elementos que tem no array

cantoras.push("Taylor"); //Adicionou a Taylor no final da array
cantoras.unshift("Adele"); //Adicionou a Adele no começo da array
cantoras.pop(); //Removeu o último item da array
cantoras.shift(); //Removeu o primeiro item da array

//console.log(cantoras);


//SPLICE, O MÉTODO SPLICE TEM O PODER DE SUBSTITUIR, ADICIONAR E REMOVER

//                     0        1      2        3
let instrutores = ["Karynne", "Joy", "João", "Samuel" ]
//console.log(instrutores)

//SUBSTITUIR - O 1º É O ÍNDICE, O 2º É A QUANTIDADE, "VALOR"

instrutores.splice(1,1,"Carol")
//console.log(instrutores)
//['Karynne', 'Carol', 'João', 'Samuel']

//Exemplo 2: substituindo 2 elementos
//O 1º É O ÍNDICE, O 2º É A QUANTIDADE, "VALORES"

//instrutores.splice(1,2,"Carol", "Maria Carolina")
//console.log(instrutores)


//ADICIONAR - O 1º É O ÍNDICE, 0 ZERO QUER DIZER QUE NÃO QUERO REMOVER NENHUM ITEM, "VALOR"

//    0          1       2         3
//['Karynne', 'Carol', 'João', 'Samuel']

instrutores.splice(2,0,"Vini")
//['Karynne', 'Carol', 'Vini', 'João', 'Samuel']
//console.log(instrutores)

instrutores.splice(3,0, "Marina", "Fernanda") //No índice 3, não remova nenhum 0 e adicione "Marina", "Fernanda"
//['Karynne', 'Carol', 'Vini', 'Marina', 'Fernanda', 'João', 'Samuel']
//console.log(instrutores)

//REMOVER, 1º VALOR É O ÍNDICE, 2ºVALOR É A QUANTIDADE
instrutores.splice(2,1) //à partir do índice 1, remova 1 item
//console.log(instrutores)

//instrutores.splice(2,3) //à partir do índice 2, remova 3 itens
//console.log(instrutores)

//SLICE, retorna numa cópia do array sem alterar o original. Começando pelo índice inicial (inclusivo) e indo até o índice final (exclusivo).

console.log(instrutores)
//['Karynne', 'Carol', 'Marina', 'Fernanda', 'João', 'Samuel']

console.log(instrutores.slice(0,2))
console.log(instrutores.slice(0,3))

