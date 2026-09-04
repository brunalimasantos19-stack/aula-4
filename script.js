// Seleciona todos os botões do documento
const botoes = document.querySelectorAll("button");

// Para cada botão encontrado, adiciona a funcionalidade
botoes.forEach(function (botao) {
    let curtiu = false; // Estado inicial do botão (não curtido)
    
    // Adiciona um ouvinte de evento para o clique
    botao.addEventListener("click", botaoClicado);
    
    // Função que é executada quando o botão é clicado
    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span"); // Seleciona o span dentro do botão
        
        if (curtiu === false) {
            texto.textContent++; // Incrementa o contador
            curtiu = true; // Muda o estado para curtido
        } else {
            texto.textContent--; // Decrementa o contador
            curtiu = false; // Muda o estado para não curtido
        }
    }
})
