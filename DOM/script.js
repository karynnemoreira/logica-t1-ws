//querySelector é um método que captura um elemento no DOM e permite que capturemos pela (tag, class ou id)

document.querySelector("h1").textContent = "Olá, galerinha!"


//getElementById pega o elemento raiz através da  ID
document.getElementById("teste").textContent = "Testando"


//-------------


//Class, Seleciona vários elementos

let mensagem = document.getElementsByClassName("mensagem");
mensagem[0].style.color = "orange";
mensagem[0].style.fontSize = "25px";


mensagem[1].style.color = "green";
mensagem[1].style.fontSize = "30px";

mensagem[2].style.fontWeight = "bold";
mensagem[2].textContent = "Mudando o conteúdo do texto do índice 2"
