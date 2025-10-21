// --- Selecionar os elementos ---
const botaoAtacar = document.getElementById('botao-atacar');
const personagem = document.getElementById('personagem'); // Agora é uma <img>
const logCombate = document.getElementById('log-combate');

// --- Configuração da Animação ---
const framesAtaque = [
    'imagens/ataque-1.png',
    'imagens/ataque-2.png',
    'imagens/ataque-3.png',
    'imagens/ataque-4.png',
    'imagens/ataque-5.png',
    'imagens/ataque-6.png',
    'imagens/ataque-7.png',
    'imagens/ataque-8.png',
    'imagens/ataque-9.png'
];
const frameParado = 'imagens/parado.png';
const VELOCIDADE_ANIMACAO = 80;

// --- Ouvinte do Clique ---
botaoAtacar.addEventListener('click', function() {
    
    // 1. Desabilitar o botão para evitar cliques duplos
    botaoAtacar.disabled = true;

    // 2. ROLAR O DADO PRIMEIRO!
    const rolagem = Math.floor(Math.random() * 20) + 1;

    // 3. VERIFICAR A CONDIÇÃO (MAIOR QUE 12)
    if (rolagem >= 12) {
        // ACERTOU! A ANIMAÇÃO VAI COMEÇAR.
        logCombate.textContent = `Você rolou ${rolagem}. ACERTOU! Iniciando ataque...`;

        // 4. Iniciar a animação (só entra aqui se rolagem > 12)
        let frameAtual = 0; // Começa no primeiro frame

        // 5. Cria um "timer" que executa o código a cada 80ms
        const animacao = setInterval(() => {
            
            // 5a. Troca a fonte da imagem para o frame atual
            personagem.src = framesAtaque[frameAtual];
            frameAtual++; // Avança para o próximo frame

            // 5b. VERIFICA SE A ANIMAÇÃO ACABOU
            if (frameAtual >= framesAtaque.length) {
                
                // 6. ANIMAÇÃO TERMINOU!
                clearInterval(animacao); // Para o timer!

                // 7. Reseta o personagem para a imagem "parado"
                personagem.src = frameParado;
                
                // 8. Reabilita o botão (somente DEPOIS que a animação acabar)
                botaoAtacar.disabled = false;
            }

        }, VELOCIDADE_ANIMACAO); // O timer repete a cada 80ms

    } else {
        // ERROU! (Rolagem foi 12 ou menor)
        // NENHUMA ANIMAÇÃO OCORRE.

        // 9. Informa o resultado
        logCombate.textContent = `Você rolou ${rolagem}. ERROU!`;

        // 10. Reabilita o botão imediatamente, pois não houve animação
        botaoAtacar.disabled = false;
    }
});