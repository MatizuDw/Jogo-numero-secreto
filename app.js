let numerosSortiados = [];
let maximoDeNumeros = 3;
let numeroSecreto = numeroAleatorio()
let tentativas = 1
function textoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
};
function mensagemInicial(){
  textoNaTela('h1', 'Jogo do número secreto');
  textoNaTela('p', 'Digite um número entre 1 e 10'); 
}

mensagemInicial()
const botao = document.getElementById('meuBotao');

  botao.addEventListener('mouseover', function() {
    botao.style.cursor = 'pointer';
  });

  botao.addEventListener('mouseout', function() {
    botao.style.cursor = 'default';
  });

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        textoNaTela('h1', 'Voçê acertou!')
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        textoNaTela('p', `Acertou com ${tentativas} ${palavraTentativas}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            textoNaTela('p', `O número secreto é menor que ${chute}!`);
        }else{
            textoNaTela('p', `O número secreto é maior que ${chute}!`);
        }
        tentativas++;
        limparCampo()

        }
    };

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * maximoDeNumeros + 1);
    let quantidadeDeElementosNaLista = numerosSortiados.length;
    if (quantidadeDeElementosNaLista = maximoDeNumeros ){
        numerosSortiados = []
    }
    if (numerosSortiados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else{
        numerosSortiados.push(numeroEscolhido)
        return numeroEscolhido;
    }
    
};
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
};

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio()
    mensagemInicial()
    tentativas = 1
    limparCampo()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
