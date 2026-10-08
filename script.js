const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você recebe a bola no meio-campo com espaço para avançar. O que você faz?",
        alternativas: [
            {
                texto: "Parto em drible, invado a defesa e tento o gol.",
                afirmacao: "Você tem personalidade ofensiva, coragem e coragem para decidir o jogo."
            },
            {
                texto: "Olho a melhor opção e faço o passe mais certeiro para o companheiro.",
                afirmacao: "Você é inteligente, criativo e sabe construir o jogo com calma."
            }
        ]
    },
    {
        enunciado: "Seu time está atrás no placar e o treinador pede uma decisão arriscada. Como você reage?",
        alternativas: [
            {
                texto: "Assumo a responsabilidade e tento a jogada mais ousada.",
                afirmacao: "Você é líder, gosta de marcar presença e faz acontecer no momento decisivo."
            },
            {
                texto: "Me organizo, seguro a equipe e procuro a melhor oportunidade para reagir.",
                afirmacao: "Você tem calma, visão de jogo e sabe manter a equipe no controle."
            }
        ]
    },
    {
        enunciado: "Em uma final importante, o adversário avança rápido pelo lado do campo. Sua reação é:",
        alternativas: [
            {
                texto: "Vou marcar forte, fechar o espaço e impedir a jogada.",
                afirmacao: "Você é competitivo, tenaz e nunca deixa o adversário respirar."
            },
            {
                texto: "Vou organizar a defesa e avisar os companheiros para manter o sistema.",
                afirmacao: "Você é racional, estratégico e entende que a defesa vence campeonatos."
            }
        ]
    },
    {
        enunciado: "Depois da partida, o técnico pede feedback para o grupo. Como você fala sobre o desempenho?",
        alternativas: [
            {
                texto: "Falo com confiança, proponho ideias e incentivo a equipe a seguir agressiva.",
                afirmacao: "Você transmite energia, motivação e tem o espírito de vencedor."
            },
            {
                texto: "Analiso o jogo com atenção e proponho ajustes para melhorar na próxima partida.",
                afirmacao: "Você é observador, disciplinado e sempre busca evoluir com inteligência."
            }
        ]
    },
    {
        enunciado: "Se você pudesse escolher um papel no time, qual seria o seu?",
        alternativas: [
            {
                texto: "Atacante, para decidir os jogos com gols e dribles.",
                afirmacao: "Seu perfil é de jogador decisivo, que transforma pressão em oportunidade."
            },
            {
                texto: "Meio-campista ou zagueiro, para controlar o jogo e proteger o grupo.",
                afirmacao: "Seu perfil é de jogador inteligente, seguro e essencial para a equipe."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado final:";
    textoResultado.textContent = "Seu estilo de jogo é muito especial: " + historiaFinal + "Você tem presença, inteligência e uma personalidade que faz diferença em qualquer equipe.";
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

caixaResultado.style.display = "none";
mostraPergunta();