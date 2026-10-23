// Seleção de elementos do DOM usando nomenclaturas em Português
const botaoMenu = document.getElementById('botao-menu');
const navegacao = document.getElementById('navegacao');
const botaoTema = document.getElementById('botao-tema');
const iconeTema = botaoTema.querySelector('i');
const corpoPagina = document.body;
const elementoTextoDigitacao = document.getElementById('texto-digitacao');
const anoAtualSpan = document.getElementById('ano-atual');
const botaoVoltarTopo = document.getElementById('botao-voltar-topo');
const elementosAnimados = document.querySelectorAll('.anima-scroll');

// 1. Alternância de Menu Mobile (Hambúrguer)
function alternarMenu() {
    navegacao.classList.toggle('ativa');
}
botaoMenu.addEventListener('click', alternarMenu);

// Fechar menu ao clicar em um link (no modo mobile)
document.querySelectorAll('.lista-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navegacao.classList.remove('ativa');
        }
    });
});

// 2. Alternância de Tema (Dark / Light Mode)
function alternarTema() {
    corpoPagina.classList.toggle('tema-escuro');
    
    // Trocar o ícone dependendo do tema ativo
    if (corpoPagina.classList.contains('tema-escuro')) {
        iconeTema.classList.remove('bi-moon');
        iconeTema.classList.add('bi-sun');
    } else {
        iconeTema.classList.remove('bi-sun');
        iconeTema.classList.add('bi-moon');
    }
}
botaoTema.addEventListener('click', alternarTema);

// 3. Efeito Máquina de Escrever (Typing Effect)
const textoParaDigitar = "Olá, eu sou Pedro Sampaio.";
let indiceDigitacao = 0;

function digitarTexto() {
    if (indiceDigitacao < textoParaDigitar.length) {
        elementoTextoDigitacao.textContent += textoParaDigitar.charAt(indiceDigitacao);
        indiceDigitacao++;
        setTimeout(digitarTexto, 120); // Velocidade da digitação
    } else {
        // Opcional: remover a borda (cursor) após terminar
        setTimeout(() => {
            elementoTextoDigitacao.style.borderRight = 'none';
        }, 2000);
    }
}
// Iniciar a digitação ao carregar a página
window.addEventListener('load', digitarTexto);

// 4. Ano dinâmico no rodapé
function definirAnoAtual() {
    const ano = new Date().getFullYear();
    anoAtualSpan.textContent = ano;
}
definirAnoAtual();

// 5. Botão Flutuante "Voltar ao Topo" e Animações no Scroll (Fade-in-up)
function verificarScroll() {
    // Controle do Botão Voltar ao Topo
    if (window.scrollY > 300) {
        botaoVoltarTopo.classList.add('visivel');
    } else {
        botaoVoltarTopo.classList.remove('visivel');
    }

    // Animação de entrada dos elementos (Fade-in-up)
    elementosAnimados.forEach(elemento => {
        const posicaoElemento = elemento.getBoundingClientRect().top;
        const posicaoTela = window.innerHeight * 0.85; // Dispara quando 85% do elemento estiver visível na tela

        if (posicaoElemento < posicaoTela) {
            elemento.classList.add('mostrar');
        }
    });
}

// Escutar eventos de rolagem e carregamento
window.addEventListener('scroll', verificarScroll);
window.addEventListener('load', verificarScroll); // Executar uma vez no carregamento

// Ação do Botão Voltar ao Topo (Smooth Scroll)
botaoVoltarTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
