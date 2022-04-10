let tempoJogo = 0;
let tempoJogoMin = 0;
let tempoJogoMax = 9999;

let cronometro = null;
let intervaloCronometro = 1000;

function iniciarCronometro(acrescimo) {
  atualizarCronometro(0);

	cronometro = setInterval(function() {
		atualizarCronometro(acrescimo);
	}, intervaloCronometro);
}

function atualizarCronometro (acrescimo) {	
	tempoJogo += acrescimo;
  /*
	if(tempoJogo <= tempoJogoMin) {
    tempoJogo = tempoJogoMin;
    
    clearInterval(cronometro);
    tratarVitoriaJogo();
  }
  */
  document.getElementById('tempo-jogo').innerHTML = tempoJogo;
}