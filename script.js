// 1. Criamos uma VARIÁVEL. 
// Uma variável é como uma gaveta onde guardamos um valor. 
// Começamos com zero porque ninguém clicou ainda.
let cliques = 0;

// 2. Agora precisamos "pegar" os elementos do HTML para usar aqui.
// Dizemos ao computador: "Procure no documento o ID 'resultado' e guarde nesta gaveta"
const displayNumero = document.getElementById('resultado');
const meuBotao = document.getElementById('botao-clique');

// 3. Criamos uma FUNÇÃO de escuta.
// O computador vai ficar "ouvindo" o botão. QUANDO houver um 'click', ele executa o código abaixo.
meuBotao.addEventListener('click', function() {
    
    // A LOGICA:
    cliques = cliques + 1; // Pega o que tinha na gaveta e soma mais 1
    
    // Agora mostramos o novo valor lá no site (no HTML)
    displayNumero.innerText = cliques;
    
    // Um toque de inteligência: se chegar a 10 cliques, mude a cor para vermelho!
    if (cliques === 10) {
        displayNumero.style.color = "red";
    }
});