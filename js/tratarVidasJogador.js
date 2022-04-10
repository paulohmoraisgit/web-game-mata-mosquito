let vidasJogador = 0;
let vidasJogadorMin = 0;
let vidasJogadorMax = 5;

let vidasJogadorUIs = Array();

const coracao_cheio_dir = 'img/coracao/coracao_cheio.png';
const coracao_metade_dir = 'img/coracao/coracao_metade.png';
const coracao_vazio_dir = 'img/coracao/coracao_vazio.png';

function iniciarVidasJogador() {
  vidasJogador = vidasJogadorMax;
  iniciarVidasJogadorHUD();
}

function iniciarVidasJogadorHUD() {
  vidasJogadorUIs = document.getElementsByClassName('vida');

  for (let i = 0; i < vidasJogadorMax; i++) {
    vidasJogadorUIs[i].style.visibility = 'visible';
    vidasJogadorUIs[i].src = coracao_cheio_dir;
  }
}

function jogadorRecebeDano(dano) {
  const vidasJogadorAnterior = vidasJogador;
  vidasJogador -= dano;

  if(vidasJogador <= vidasJogadorMin) {
	  vidasJogador = vidasJogadorMin;
	  tratarFimJogo();
	}

  for(let i = (vidasJogadorAnterior - 1); i >= vidasJogador; i--) {
    vidasJogadorUIs[i]. src = coracao_vazio_dir;
  }
}